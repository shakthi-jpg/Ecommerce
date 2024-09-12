import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import Swal from 'sweetalert2';

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const Increase = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "Increase", id });
    }
  };

  const Decrease = (id) => {
    const Index = cart.findIndex((p) => p.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "Decrease", id });
    }
  };

  const handleRemove = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to remove this item from your cart?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel',
      customClass: {
        container: 'swal-container',
      },
      width: '300px', // Adjust width
      height: '150px', // Adjust height (height might not work directly)
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "Remove", id });
        Swal.fire(
          'Removed!',
          'The item has been removed from your cart.',
          'success'
        );
      }
    });
  };

  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h5>${product.price}</h5>
        <div className="buttons">
          <button
            className="rounded-circle px-2 m-1"
            onClick={() => Decrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded ">{product.quantity}</button>
          <button
            className="rounded-circle px-2 m-1"
            onClick={() => Increase(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-danger mt-3"
          onClick={() => handleRemove(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
