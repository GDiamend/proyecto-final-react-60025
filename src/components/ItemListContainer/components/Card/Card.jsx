import Image from "../../../Image/Image";

function Card(props) {
    let { msg, img } = props;

    return <>
        <div>
            <h1>{msg}</h1>
        </div>
        <div>
            <Image img={img} />
        </div>
    </>
}

export default Card;