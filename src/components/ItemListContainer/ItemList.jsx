import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <div className="row row-cols-1 row-cols-lg-5 justify-content-center mt-3">
            {items.map(item => (
                <div className="col text-center m-3" key={item.id}>
                    <Item item={ item } />
                </div>
            ))}
        </div>
    );
}

export default ItemList;