import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return <>
        <div className="card" key={item.id}>
            <div className="card-header">
                <h5 className="card-title">{item.title}</h5>
            </div>
            <div className="m-2">
                <img className="object-fit-cover w-100 h-fix" src={item.img} alt={item.name} />
            </div>
            <hr />
            <div className="card-body">
                <p className="card-text">Marca: {item.brand}</p>
            </div>
            <div>
                <Link to={`/detail/${item.id}`} className="btn btn-primary m-3 animate__animated animate__pulse">Ver detalle</Link>
            </div>
        </div>
    </>
}

export default Item;