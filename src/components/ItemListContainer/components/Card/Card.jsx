import Image from "../../../Image/Image";

function Card(props) {
    let { title, img, brand } = props;

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
            </div>
            <div>
                <a className="btn btn-primary m-3" data-bs-toggle="offcanvas" href="#" role="button" aria-controls="offcanvasExample">
                    Ver detalle
                </a>
            </div>
        </div>
    </>
}

export default Card;