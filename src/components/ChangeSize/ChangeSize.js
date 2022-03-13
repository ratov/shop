import React from 'react';

const ChangeSize = ({ item, shoes, setShoes }) => {

	const changeDefaultSize = (id, size) => {
		setShoes(shoes.map(item => {
			if (id === item.id) {
				return { ...item, defaultSize: size }
			} else {
				return item;
			}
		}))
	};

	return (
		<div className='home__card-brand home__card-price home__card-size'>
			<b>Select size:</b>
			<select defaultValue={item.defaultSize} onChange={(e) => { changeDefaultSize(item.id, e.target.value) }}>
				{item.size.map((el) => {
					return (
						<option key={el} value={el}>{el}</option>
					);
				})}
			</select>
		</div>
	);
};

export default ChangeSize;