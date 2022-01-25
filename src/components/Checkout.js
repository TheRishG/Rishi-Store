/** @format */

import React, { useState } from 'react';
import { useCartContext } from '../context/cart_context';

import { formatPrice } from '../utils/helpers';

const CheckoutForm = () => {
	const { total_amount, clearCart } = useCartContext();
	const [succeeded, setSucceeded] = useState(false);
	const paid = () => {
		setSucceeded(true);
		setTimeout(clearCart, 5000);
	};
	return (
		<div>
			{succeeded ? (
				<article>
					<h4>Thank you</h4>
					<h4>Your payment was successful!</h4>
				</article>
			) : (
				<article>
					<h4>Thankyou for shopping with us</h4>
					<p>Your cart total is {formatPrice(total_amount)}</p>
					<button className='btn' onClick={paid}>
						Pay Now
					</button>
				</article>
			)}
		</div>
	);
};

export default CheckoutForm;
