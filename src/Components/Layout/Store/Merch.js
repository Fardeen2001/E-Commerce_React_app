import React from "react";
import Button from "react-bootstrap/Button";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Merch = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col">
      <h2>{props.title}</h2>

      <div className="card">
        <NavLink to={`/ProductDetails/${props.id}`}>
          <img src={props.url} className="card-img-top" alt={props.title} />
        </NavLink>
        <div className="card-body d-flex justify-content-around">
          <h5 className="card-title">Rs {props.price}</h5>

          <Button
            variant="primary"
            onClick={() => {
              addItem(props.item);
            }}
          >
            Add To cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Merch;
