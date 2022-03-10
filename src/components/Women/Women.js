import React from 'react';
import Card from '../Card/Card';

const Women = ({ shoes }) => {
	return (
		<Card shoes={shoes.filter((item) => item.gender === 'women' || item.gender === 'unisex')} />
	);
};

export default Women;