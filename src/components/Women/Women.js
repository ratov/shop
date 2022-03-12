import React from 'react';
import Card from '../Card/Card';

const Women = ({ shoes, setShoes }) => {
	return (
		<Card shoes={shoes.filter((item) => item.gender === 'women' || item.gender === 'unisex')} setShoes={setShoes} />
	);
};

export default Women;