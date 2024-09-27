import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getDocs, collection, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./style.css";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");
        const q = categoryId
            ? query(itemCollection, where("category", "==", categoryId))
            : itemCollection;

        setLoading(true);
        getDocs(q)
            .then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
            .catch((err) => {
                setError("Error al cargar los productos. Intente de nuevo.");
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return (
            <div className="loader-container d-flex justify-content-center align-items-center">
                <span className="loader"></span>
            </div>
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <ItemList items={products} />
        </div>
    );
}

export default ItemListContainer;
