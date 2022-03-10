import React from 'react';
import notImage from '../../assets/notImage.png';
import Card from '../Card/Card';

const Men = ({ cart, setCart, shoes }) => {
	return (
		<Card cart={cart} setCart={setCart} shoes={shoes.filter((item) => item.gender === 'men' || item.gender === 'unisex')} />
	);
};

export default Men;