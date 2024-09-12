import React, { useContext } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducer'
import Swal from 'sweetalert2'

const Cart = () => {
    const { cart } = useContext(CartContext)

    // Function to handle checkout button click
    const handleCheckout = () => {
        const totalItems = totalItem(cart);
        const total = totalPrice(cart);

        Swal.fire({
            title: 'Checkout',
            text: `Total Items: ${totalItems}\nTotal Price: $${total}`,
            icon: 'info',
            confirmButtonText: 'OK'
        });
    }

    return (
        <div className='container mt-3'>
            <div className="row">
                <div className="col-8">
                    {cart.map(p => (
                        <CartProduct key={p.id} product={p} />
                    ))}
                </div>
                <div className="col-4 ">
                    <div className="bg-secondary p-3 text-white">
                        <h5>Total Items: {totalItem(cart)}</h5>
                        <h5>Total Price: ${totalPrice(cart)} </h5>
                        <button className='btn btn-warning' onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
