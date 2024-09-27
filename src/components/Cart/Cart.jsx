import { useContext, useState } from 'react'
import { getFirestore, collection, addDoc, getDoc, doc, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext/CartContext';
import Form from '../Form/Form';
import Swal from 'sweetalert2';

const Cart = () => {

    const { cart, removeItem, clear, calculatePrice } = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    });

    const [error, setError] = useState({
        name: "",
        email: ""
    });

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()

        const localError = {}

        if (!buyer.name) {
            localError.name = "Debe completar el nombre"
        };

        if (!buyer.email) {
            localError.email = "Debe completar el email"
        };

        if (Object.keys(localError).length === 0) {
            addOrder();
        } else {
            setError(localError)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Todos los campos deben ser completados",
            });
        };
    };

    const checkStockAvailability = async (cart) => {
        const db = getFirestore();
        for (let item of cart) {
            const itemRef = doc(db, "items", item.id);
            const itemSnap = await getDoc(itemRef);

            if (itemSnap.exists()) {
                const currentStock = itemSnap.data().stock;

                if (currentStock < item.quantity) {
                    Swal.fire({
                        icon: "error",
                        title: "Stock insuficiente",
                        text: `El producto ${item.title} no tiene suficiente stock. Solo hay ${currentStock} unidades disponibles.`,
                    });
                    return false;
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `El producto ${item.title} no se encontró en la base de datos.`,
                });
                return false;
            }
        }
        return true;
    };

    const updateStock = async (cart) => {
        const db = getFirestore();
        for (let item of cart) {
            const itemRef = doc(db, "items", item.id);
            const newStock = item.stock - item.quantity;

            await updateDoc(itemRef, {
                stock: newStock
            });
        }
    };

    const addOrder = async () => {
        const db = getFirestore();

        const stockSufficient = await checkStockAvailability(cart);
        if (!stockSufficient) {
            return;
        }

        const purchase = {
            buyer,
            items: cart,
            total: calculatePrice(),
            date: new Date()
        };

        const orderCollection = collection(db, "orders");

        try {
            await addDoc(orderCollection, purchase);

            await updateStock(cart);

            Swal.fire({
                icon: "success",
                title: "Orden generada",
                text: "Gracias por su compra",
            });

            clear();
        } catch (error) { }
    };

    return (
        <div>
            {cart.length !== 0 ? (
                <>
                    <div className='d-flex justify-content-center row-cols-1 row-cols-lg-5 m-3'>
                        {cart.map((el) => (
                            <div className='card m-3' key={el.id}>
                                <div className='card-header'>
                                    <p className='fw-bolder'>Producto: {el.title} - {el.brand}</p>
                                    <p className='fw-bolder'>Cantidad: {el.quantity}</p>
                                    <p className='fw-bolder'>Precio: {el.price}</p>
                                    <p className='fw-bolder'>Precio Total: {el.price * el.quantity}</p>
                                </div>
                                <img src={el.img} className='object-fit-cover w-100 h-fix' alt={el.name} />
                                <hr />
                                <div className='text-center'>
                                    <button onClick={() => removeItem(el.id)} className="btn btn-danger w-25 m-3">Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />
                    <div className='text-center'>
                        <button onClick={() => clear()} className="btn btn-danger m-3">Vaciar carro</button>
                    </div><Form
                        handleChange={handleChange}
                        submit={submit}
                        formData={buyer}
                        error={error} />
                </>
            ) : (
                <div className='text-center m-5'>
                    <h3>El carrito está vacío</h3>
                    <div className='m-5'>
                        <Link to={`/`} className="btn btn-primary m-3 animate__animated animate__pulse">Volver al inicio</Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart;