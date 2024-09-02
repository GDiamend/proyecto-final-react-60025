import { NavLink } from "react-router-dom";
import Image from "../../../Image/Image";

function Card(props) {
    let { title, img, brand, category } = props;

    return <>
        <div className="card h-100">
            <div className="card-header">
                <h5 className="card-title">{title}</h5>
            </div>
            <div className="m-2">
                <Image img={img} />
            </div>
            <hr />
            <div className="card-body">
                <p className="card-text">{brand}</p>
            </div>
            <div>
                <NavLink to={`/category/${category}`} className="btn btn-primary m-3">Ver detalle</NavLink>
            </div>
        </div>
    </>
}

export default Card;