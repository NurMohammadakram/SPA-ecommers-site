import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleDelete }) => {
    const {id, name, img, price, quantity} = cart;
  return (
    <div className="cart">
      <img
        style={{
          width: "90px",
          height: "90px",
          marginRight: "17px",
          borderRadius: "8px",
        }}
        src={img}
        alt=""
      />
      <div className="cart-infos">
        <h4>{name}</h4>
        <p>
          Price: $ <span style={{ color: "#F90" }}>{price}</span>
        </p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={() => handleDelete(id)} className="cart-delete-icon">
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Cart;
