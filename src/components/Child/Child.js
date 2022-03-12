import React from 'react';
import Card from '../Card/Card';

const Child = ({ shoes, setShoes }) => {
	return (
		<Card shoes={shoes.filter((item) => item.gender === 'child' || item.gender === 'toddler')} setShoes={setShoes} />
	);
};

export default Child;