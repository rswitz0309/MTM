import logo from "../assets/logo_trucker_2.png";
import { navItems } from "../constants";
import {Menu, X} from "lucide-react";
import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    const[mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('loggedInUser');
        if (userInfo) {
            try {
                setLoggedInUser(JSON.parse(userInfo));
            } catch (error) {
                console.error('Error parsing user info:', error);
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        setLoggedInUser(null);
        navigate('/');
    };

    const handleNavClick = (e, href, label) => {
        e.preventDefault();
        if (href === '#top') {
            window.location.href = '/';
        } else if (!loggedInUser && label !== "Home") {
            window.location.href = "login.html";
        } else if (href.startsWith('/')) {
            navigate(href);
        } else {
            window.location.href = href;
        }
    };

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-11 w-20 mr-5" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">Mother Truckin' Management</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                                    className={!loggedInUser && item.label !== "Home" ? "opacity-50 pointer-events-none" : ""}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        {loggedInUser ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-white">Welcome, {loggedInUser.name}!</span>
                                <button
                                    onClick={handleLogout}
                                    className="py-2 px-3 border rounded-md hover:bg-neutral-800"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <a href="login.html" className="py-2 px-3 border rounded-md">
                                Log In
                            </a>
                        )}
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X/> : <Menu/>}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col jutify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href, item.label)}
                                        className={!loggedInUser && item.label !== "Home" ? "opacity-50 pointer-events-none" : ""}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            {loggedInUser ? (
                                <div className="flex flex-col items-center space-y-4">
                                    <span className="text-white">Welcome, {loggedInUser.name}!</span>
                                    <button
                                        onClick={handleLogout}
                                        className="py-2 px-3 border rounded-md hover:bg-neutral-800"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <a href="login.html" className="py-2 px-3 border rounder-md">
                                    Log In
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;