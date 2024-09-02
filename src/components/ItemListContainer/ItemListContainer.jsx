import Card from "./components/Card/Card";
import itemList from "../../database";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ItemListContainer() {
    const { categoryName } = useParams();
    const [filteredItems, setFilteredItems] = useState(itemList);

    useEffect(() => {
        if (categoryName) {
            setFilteredItems(itemList.filter(item => item.category === categoryName));
        } else {
            setFilteredItems(itemList);
        }
    }, [categoryName]);

    return (
        <div className="row row-cols-1 row-cols-5 justify-content-center">
            {filteredItems.map(item => (
                <div className="col text-center m-3" key={item.id}>
                    <Card
                        title={item.title}
                        img={item.src}
                        brand={item.brand}
                        category={item.category}
                        price={item.price}
                    />
                </div>
            ))}
        </div>
    );
}

export default ItemListContainer;