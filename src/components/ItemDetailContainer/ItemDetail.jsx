import Counter from "../Counter/Counter";

const ItemDetail = ({ item, onAdd }) => {

    return (
        <div className="d-flex justify-content-center m-3">
            <div className="card w-25 text-center" key={item.id}>
                <div className="card-header">
                    <h5 className="card-title">{item.title}</h5>
                </div>
                <div className="m-2">
                    <img className="object-fit-cover w-100 h-fix" src={item.img} alt={item.name} />
                </div>
                <hr />
                <div className="card-body">
                    <p className="card-text">{item.brand}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                </div>
                <div>
                    <Counter onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail