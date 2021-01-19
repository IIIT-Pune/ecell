import { Link } from "gatsby"
import React,{useState,useEffect} from "react"
import './navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = ()=> setClick(!click);
    const closeMobileView = ()=> setClick(false);

    const openButton = ()=> {
        if (window.innerWidth <= 900)
            setButton(false)
        else
            setButton(true)
    };
    
    useEffect(() => {
        openButton();
    }, []);

    const BackgroundChange = () => {
        if (window.scrollY >= 90) {
            setNavbar(true)
        }
        else {
            setNavbar(false);
            }
        };
    return (
        <div style={{ backgroundColor: 'blueviolet' }}>
            <nav className={navbar ? 'navbar-active' : 'navbar'}>
                
            </nav>
        </div>
    );
}

export default Navbar
