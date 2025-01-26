var map = L.map('map').setView([45.5, -73.6], 13);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const socket = io('http://127.0.0.1:5501');

let userBlips = {};


setInterval(() => {
    navigator.geolocation.getCurrentPosition(getPos)
    navigator.geolocation.getCurrentPosition((getPos) => {
        const lat = getPos.coords.latitude;
        const long = getPos.coords.longitude;
        console.log("log " + lat)

        socket.emit('updateLocation', {lat, long});
    });
}, 2500);

socket.on('locations', (users) => {
    console.log(users)
    Object.keys(userBlips).forEach((id) => {
        if(!users[id]) {
            map.removeLayer(userBlips[id]);
            delete userBlips[id];
        }
    });

    Object.keys(users).forEach((id) => {
        const {lat, long} = users[id];

        if (!userBlips[id]) {
            let blip = L.marker([lat, long]);

            if(id === socket.id){
                blip.bindPopup("This is me")
            } else {
                blip.bindPopup('User: ${id}')
            }
            blip.addTo(map);
            userBlips[id] = blip;
        } else {
            userBlips[id].setLatLng([lat, long]);
        }
    });
});

var blip, circle;

let firstUpdate = true;

function getPos (pos){
    console.log(pos)
    var lat = pos.coords.latitude
    var long = pos.coords.longitude
    //var accuracy = pos.coords.accuracy  ONLY useful to resize the circle radius

    if(blip && circle) {
        map.removeLayer(blip)
        map.removeLayer(circle)
    }

    blip = L.marker([lat, long])
    circle = L.circle([lat, long], {radius: 10})
    
    var blipAndCircle = L.featureGroup([blip, circle]).addTo(map)

    if(firstUpdate) {
        map.setView([lat,long], 15);
        firstUpdate = false;
    }
}



