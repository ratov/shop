import React from 'react';
import { useParams } from 'react-router-dom';

const ShoeMoreInfo = ({shoes}) => {
	let params = useParams();
	return (
		<div>
			{
				shoes.filter(item => item.title === params.title.split('-').join(' '))
				.map(item => {
					return (
						<>
							<h2>{item.shoe}</h2>
						</>
					);
				})
			}
		</div>
	);
};

export default ShoeMoreInfo;