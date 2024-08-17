import CartWidget from "./components/CartWidget";
import CartImg from "../../img/cart.svg";

function NavBar() {
    return <>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Guias</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget img={CartImg} alt="Cart Logo"/>
        </nav>
    </>
}

export default NavBar;