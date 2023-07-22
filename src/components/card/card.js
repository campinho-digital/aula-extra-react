import "./card.css";
import { Link } from "react-router-dom";

function Card({ props }) {
  return (
    <div className="card-content">
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.title}</p>
      <img alt="" src={props.image}></img>
      <Link to="/details">CLIQUE ME</Link>
    </div>
  );
}

export default Card;
