var objTruckers = [
    {
        truckerID: "12321",
        password: "truck1"
    },
    {
        truckerID: "12322",
        password: "truck2"
    },
    {
        truckerID: "12323",
        password: "truck3"
    },
    {
        truckerID: "12324",
        password: "truck4"
    },
    {
        truckerID: "12325",
        password: "truck5"
    }
];
function getInfo() {
    e.preventDefault();
    var truckerID = document.getElementById("truckerID").value;
    var password = document.getElementById("password").value;
    for(i= 0; i < objTruckers.length; i++) {
        if(truckerID == objTruckers[i].truckerID && password == objPeople[i].password) {
            console.log(truckerID + " successfully logged in!");
            return;
        }
    }
    messageElement.textContent = "Incorrect trucker ID or password";
    
}