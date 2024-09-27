import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext/CartContext";
import Logo from "../images/logo.webp"
import "./style.css"

const NavBar = () => {
    const { cart } = useContext(CartContext);

    return <>
        <nav className="navbar container-fluid bg-color">
            <div className="mx-4">
                <NavLink className="navbar-brand" to="/cart">
                    <i className="bi bi-cart4 d-inline-block align-text-top fs-3"> Carrito <span>{cart.length} items</span></i>
                </NavLink>
            </div>
            <div>
                <NavLink to="/"><img src={Logo} alt="Logo" /></NavLink>
            </div>
            <div className="navbar-dark">
                <ul className="navbar-nav flex-row justify-content-end">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link navbar-brand fw-bolder">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/drink" className="nav-link navbar-brand fw-bolder">Bebida</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/food" className="nav-link navbar-brand fw-bolder">Comida</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/breakfast" className="nav-link navbar-brand fw-bolder">Desayuno</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default NavBar;