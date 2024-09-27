const Form = ({ handleChange, submit, formData, error }) => {
    return (
        <form className='text-center m-3' onSubmit={submit}>
            {
                Object.keys(formData).map((key, i) => (
                    <div key={i} className='m-3 fw-medium' style={{ width: "100%" }}>
                        {key == "name" ? (
                            <>
                            <label htmlFor={key} className="me-2">Ingrese su nombre</label>
                            <input type="text" name={key} id={key} onChange={handleChange} />
                            </>
                        ) : (
                            <>
                            <label htmlFor={key} className="me-2">Ingrese su e-mail</label>
                            <input type="email" name={key} id={key} onChange={handleChange} />
                            </>
                        )}
                        <div style={{ height: '1.2rem', color: 'red' }}>
                            {error[key] && <span>{error[key]}</span>}
                        </div>
                    </div>
                ))
            }
            <div>
                <button className='btn btn-primary animate__animated animate__pulse'>Enviar Pedido</button>
            </div>
        </form>
    )
}

export default Form;