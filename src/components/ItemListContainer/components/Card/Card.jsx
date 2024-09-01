import Image from "../../../Image/Image";

function Card(props) {
    let { title, img, marca } = props;

    return <>
        <div class="card h-100">
            <div class="card-header">
                <h5 class="card-title">{title}</h5>
            </div>
            <Image img={img} />
            <div class="card-body">
                <p class="card-text">{marca}</p>
            </div>
            <div>
                <a class="btn btn-primary m-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    Ver detalle
                </a>
            </div>
        </div>
    </>
}

export default Card;