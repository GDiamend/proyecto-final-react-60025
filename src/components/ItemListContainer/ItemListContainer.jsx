import Card from "./components/Card/Card";
import itemList from "../../database";

function ItemListContainer() {
    const renderedCards = itemList.map((item) => {
        return (
            <div className="col text-center m-3">
                <Card
                    key={item.id}
                    title={item.title}
                    img={item.src}
                    brand={item.brand}
                    category={item.category}
                />
            </div>
        )
    })

    return(<div className="row row-cols-1 row-cols-5 justify-content-center">{renderedCards}</div>)
}

export default ItemListContainer;