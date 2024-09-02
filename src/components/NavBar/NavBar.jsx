import { Link } from "react-router-dom";
import CartWidget from "./components/CartWidget";
import CartImg from "../../img/cart.svg";
import Image from "../Image/Image"
import Logo from "../../img/Logo.webp"

function NavBar() {
    return <>
        <nav className="navbar container-fluid bg-color">
            <div className="mx-4">
                <a className="navbar-brand" href="#">
                    <CartWidget img={CartImg} alt="Cart Logo" className="d-inline-block align-text-top w-25 h-25" />
                </a>
            </div>
            <div>
                <Link to="/"><Image img={Logo} /></Link>
            </div>
            <div className="navbar-dark">
                <ul className="navbar-nav flex-row justify-content-end">
                    <li className="nav-item">
                        <Link to="/" className="nav-link navbar-brand fw-bolder">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/drink" className="nav-link navbar-brand fw-bolder">Bebida</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/food" className="nav-link navbar-brand fw-bolder">Comida</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/breakfast" className="nav-link navbar-brand fw-bolder">Desayuno</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default NavBar;