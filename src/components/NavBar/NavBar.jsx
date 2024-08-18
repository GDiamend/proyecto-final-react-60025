import CartWidget from "./components/CartWidget";
import CartImg from "../../img/cart.svg";

function NavBar() {
    return <>
        <nav class="navbar container-fluid bg-color">
            <div class="mx-4">
                <a class="navbar-brand" href="#">
                    <CartWidget img={CartImg} alt="Cart Logo" width="40" height="40" class="d-inline-block align-text-top" />
                </a>
            </div>
            <div class="navbar-dark">
                <ul class="navbar-nav flex-row justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link navbar-brand fw-bolder" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand fw-bolder" href="#">Guias</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand fw-bolder" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand fw-bolder" href="#">Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navbar-brand fw-bolder" href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default NavBar;