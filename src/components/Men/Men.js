import React from 'react';
import notImage from '../../assets/notImage.png';
import Card from '../Card/Card';

const Men = ({ shoes, setShoes }) => {
	return (
		<Card shoes={shoes.filter((item) => item.gender === 'men' || item.gender === 'unisex')} setShoes={setShoes} />
	);
};

export default Men;