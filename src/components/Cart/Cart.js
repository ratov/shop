import React, { useContext } from 'react';
import { CustomContext } from '../../Context';

const Cart = () => {

	const { cart, plusCountCart, minusCountCart } = useContext(CustomContext);

	return (
		<div className="container">
			<table className="centered">
				<thead>
					<tr>
						<th>Shoes Name</th>
						<th>Shoes Count</th>
						<th>Action</th>
						<th>Shoes Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item, idx) => {
						return (
							<tr key={item.shoe[0].id}>
								<td>{item.shoe[0].shoe}</td>
								<td>{item.count}</td>
								<td className="cart__buttons-row">
									<button type="button" className="cart__button-plus" onClick={() => plusCountCart(item.shoe[0].id)}>+</button>
									<button type="button" className="cart__button-minus" onClick={() => minusCountCart(item.shoe[0].id)}>-</button>
								</td>
								<td>$ {item.shoe[0].retailPrice * item.count}</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<div className="cart__foot">
				<p className="cart__total">Total price: ${cart.reduce((acc, rec) => {
					return acc + rec.count * rec.shoe[0].retailPrice;
				}, 0)} </p>
				<button className="cart__pay btn" type="button">Pay</button>
			</div>

		</div>
	);
};

export default Cart;