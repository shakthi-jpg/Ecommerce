import React, { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = async () => {
    // Show a stylish SweetAlert2 success message
    Swal.fire({
      title: 'Success!',
      text: 'The product has been added to your cart.',
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#3085d6',
      background: '#f5f5f5',
      customClass: {
        container: 'custom-swal-container',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm-button',
      },
    });

    // Dispatch the action to add product to the cart
    dispatch({ type: "Add", product: product });
  };

  // Inline styles for the card
  const cardStyle = {
    transition: 'transform 0.3s ease',
  };

  // Inline styles for the hover effect
  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div className="col col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100"
        style={cardStyle}
        onMouseOver={(e) => e.currentTarget.style.transform = cardHoverStyle.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src={product.thumbnail} className="card-img-top h-75" alt={product.title} />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5 className="">${product.price}</h5>
          <button
            className="btn btn-outline-info"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
