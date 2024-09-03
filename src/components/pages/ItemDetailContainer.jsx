import { useParams } from "react-router-dom";
import itemList from "../../database";
import CardInfo from "../Card/CardInfo";

function Item() {

    const { id } = useParams();

    const item = itemList.find(item => item.id === parseInt(id, 10));

    if (!item) {
        return <p>Item no encontrado.</p>;
    }

    return (
        <div className="container">
            <CardInfo
                id={item.id}
                title={item.title}
                img={item.src}
                brand={item.brand}
                category={item.category}
                price={item.price}
            />
        </div>
    );
}

export default Item;