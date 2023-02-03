import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faCakeCandles } from '@fortawesome/free-solid-svg-icons';


import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return(
    <>
    <div className="containerNavbar">
        <div className="listNavbar">
            <FontAwesomeIcon icon={faHouse} />
            <NavLink to="/">Home</NavLink>{" "}
            <FontAwesomeIcon icon={faAddressBook} />
            <NavLink to="/Contacto">Contacto</NavLink>
        </div>

        <div className="iconCake">
            <h5>Happy Cake</h5>
            <FontAwesomeIcon icon={faCakeCandles} />
        </div>
    </div>
    </>
    ); 
};