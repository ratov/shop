import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import notImage from '../../assets/notImagebig.png';
import BuyButton from '../BuyButton/BuyButton';
import ChangeSize from '../ChangeSize/ChangeSize';

import images from '../../assets/notfound.png';

const ShoeMoreInfo = ({ shoes, setShoes }) => {
	let params = useParams();
	const [count, setCount] = useState('1');
	return (
		<div className="container">
			{ shoes.length === 0 ?
				<>
					<h2 className="card__notfound-title">No result found for this request</h2>
					<img className="card__notfound-img" src={images} alt="No result found for this request" />
				</>
				: ''}

			{
				shoes.filter(item => {
					return item.title.split('-').join(' ') === params.title.split('-').join(' ');

				})
					.map(item => {
						return (
							<div key={item.id}>
								<h2>{item.shoe}</h2>
								<div className="shoeMore__row">
									<div className="shoeMore__col-img">
										<img src={item.media.smallImageUrl === null ? notImage : item.media.smallImageUrl} alt={item.title} />
									</div>
									<div className="shoeMore__col-details">
										<h3>{item.brand} {item.year}</h3>
										<ChangeSize item={item} shoes={shoes} setShoes={setShoes} />
										<div className="shoeMore__pay">
											<input className="shoeMore__number" onChange={e => setCount(e.target.value)} min="1" max="10" value={count} type="number" />
											<BuyButton item={item} shoes={shoes} count={+count} />
										</div>
									</div>
								</div>
								<h4>Описание</h4>
								<p className="shoeMore__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sed nulla deserunt! Maxime, vel eaque? Voluptates porro eaque vero hic minima numquam voluptatum quam beatae earum rerum tenetur quo tempora quibusdam, itaque voluptate quidem iusto ex! Rerum maiores consectetur veniam amet, voluptatum nam deleniti modi quos. Ipsa incidunt nostrum enim!</p>

							</div>
						);
					})
			}
		</div>
	);
};

export default ShoeMoreInfo;