import { Link } from "react-router-dom"

function Error() {
    return (
        <main>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Volver</Link>
        </main>
    )
}

export default Error;