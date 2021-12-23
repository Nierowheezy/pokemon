import { Link } from "react-router-dom";

const PokemonList = ({ id, image, name, type, }: any) => {
    const style = type + " thumb-container";
    return (
        <Link to={`${name}`}>
            <div className={style}>
                <div className="number"><small>#0{id}</small></div>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
            </div>
        </Link>
    )
}

export default PokemonList