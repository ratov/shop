import React from 'react';
// import notImage from '../../assets/noteImage.jpg';

import Card from '../Card/Card';

const Home = ({ cart, setCart, shoes }) => {

	return (
		<Card cart={cart} setCart={setCart} shoes={shoes} />
	);
};

export default Home;