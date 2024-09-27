import React, { useState } from 'react'

const Counter = ({ onAdd, text = "Agregar al carrito", q = 1 }) => {

    const [count, setCount] = useState(q);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement} className="btn btn-primary m-3">-</button>
            <span>{count}</span>
            <button onClick={increment} className="btn btn-primary m-3">+</button>
            <button onClick={() => onAdd(count)} className="btn btn-primary m-3">{text}</button>
        </div>
    )
}

export default Counter