import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import notImage from '../../assets/notImagebig.png';
import BuyButton from '../BuyButton/BuyButton';
import ChangeSize from '../ChangeSize/ChangeSize';

const ShoeMoreInfo = ({ shoes, setShoes }) => {
	let params = useParams();
	const [count, setCount] = useState('1');
	return (
		<div className="container">
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
										<p className='home__card-brand'>
											<b>Gender:</b> <i>{item.gender}</i>
										</p>
										<p className='home__card-brand home__card-color'>
											<b>ColorWay:</b> <i>{item.colorway}</i>
										</p>
										<ChangeSize item={item} shoes={shoes} setShoes={setShoes} />
										<div className="shoeMore__pay">
											<input className="shoeMore__number" onChange={e => setCount(e.target.value)} min="1" max="10" value={count} type="number" />
											<BuyButton item={item} shoes={shoes} count={+count} />
										</div>
									</div>
								</div>

							</div>
						);
					})
			}
		</div>
	);
};

export default ShoeMoreInfo;