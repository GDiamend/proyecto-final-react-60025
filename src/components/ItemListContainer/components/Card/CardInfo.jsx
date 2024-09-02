import Image from "../../../Image/Image";
import { useState } from "react";

function CardInfo(props) {
    let { title, img, brand, price } = props;

    const [quantity, setQuantity] = useState(0);

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
                <p className="card-text">Precio: ${price}</p>
            </div>
            <div>
                <p>{quantity}</p>
                <button style={{ width: '30px', margin: '4px' }} onClick={() => setQuantity(quantity - 1)}> - </button>
                <button style={{ width: '30px', margin: '4px' }} onClick={() => setQuantity(quantity + 1)}> + </button>
            </div>
        </div>
    </>
}

export default CardInfo;