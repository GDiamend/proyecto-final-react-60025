import "./Footer.css";

function Footer() {
    return (
        <footer className="footer mt-4">

            <div className="text-center">
                <a href="https://www.instagram.com/" target="_blank"><i
                    className="fa-brands fa-instagram fs-2 m-4"></i></a>
                <a href="https://twitter.com/" target="_blank"><i
                    className="fa-brands fa-twitter fs-2 m-4"></i></a>
                <a href="https://facebook.com/" target="_blank"><i
                    className="fa-brands fa-facebook fs-2 m-4"></i></a>
            </div>
            <div className="text-end">
                <p>Todos los derechos reservados <i className="fa-regular fa-copyright"></i></p>
            </div>
        </footer>
    )
}

export default Footer;