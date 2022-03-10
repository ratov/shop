import React from 'react';
import Card from '../Card/Card';

const Child = ({ shoes }) => {
	return (
		<Card shoes={shoes.filter((item) => item.gender === 'child' || item.gender === 'toddler')} />
	);
};

export default Child;