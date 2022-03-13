import React from 'react';
import { useParams } from 'react-router-dom';

const ShoeMoreInfo = ({shoes}) => {
	let params = useParams();
	return (
		<div>
			ShoeMoreInfo
			{
				shoes.filter(item => {
					return item.title.split('-').join(' ') === params.title.split('-').join(' ');
					
				})
				.map(item => {
					return (
						<div key={item.id}>
							<h2>{item.shoe}</h2>
						</div>
					);
				})
			}
		</div>
	);
};

export default ShoeMoreInfo;