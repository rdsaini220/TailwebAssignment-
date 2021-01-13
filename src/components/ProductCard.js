import {Card,Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = (props) => {  
  const { id, name, description, image, price, discount_amount } = props;
  const rat = [1,2,3,4,5];
  const ran = Math.floor(Math.random() * (2 + 5))+ 1;
  return (
    <Card
      style={{ width: "100%"}}
      className={"shadow text-center mb-4"}
    >
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={image} alt={name} />
      </Link>
      <Card.Body style={{ padding: '15px'}} >
          <Link to={`/product/${id}`} className="card-title">
            {name}
          </Link>
          <h6>
            <del clasaName={"mr-2 mx-2"} style={{ "font-size": "12px" }}>
              ₹{price}
            </del>{" "}
            ₹{discount_amount}
          </h6>
          <div className="rating">
            {rat.map((val) => {
              if (val <= ran) {
                return <Rating className={"checked"} />;
              } else {
                return <Rating className={""} />;
              }
            })}
          </div>
          <Card.Text>{description.slice(0, 40)}...</Card.Text>
          <Link to={`/product/${id}`} className="w-100 btn btn-outline-primary">
            View
          </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
