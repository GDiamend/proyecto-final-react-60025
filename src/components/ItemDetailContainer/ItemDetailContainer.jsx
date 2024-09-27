import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/CartContext/CartContext";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    const onAdd = (q) => {
        addItem(item, q)
        Swal.fire({
            showConfirmButton: false,
            timer: 1000,
            icon: "success",
            title: "Item agregado",
        });
    }

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef)
            .then((snapshot) => {
                setItem({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            })
    })

    return (
        <div className="container">
            <ItemDetail item={item} onAdd={onAdd} />
        </div>
    );
}

export default ItemDetailContainer;