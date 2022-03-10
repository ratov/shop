import React from 'react';
import notImage from '../../assets/notImage.png';

const Card = ({ cart, setCart, shoes }) => {

	const addCard = (id) => {
		const find = cart.findIndex((item) => item.shoe[0].id === id);
		if (find >= 0) {
			cart[find].count++;
			setCart([...cart]);
		} else {
			setCart([...cart, {
				shoe: shoes.filter(item => item.id === id),
				count: 1
			}])
		}
	};

	return (
		<section className='home'>
			<div className="container">
				<div className="row">
					{shoes.map((item) => {
						return (
							<div className="col s12 m4" key={item.id}>
								<div className="card">
									<div className="card-image">
										<img className='home__card-image' src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl} alt='shoes image' />
									</div>
									<div className="card-content">
										<h3 className="home__card-title">{item.shoe.length < 40 ? item.shoe : item.shoe.slice(0, 39) + '...'}</h3>
										<p className='home__card-brand'><b>Brand:</b> <i>{item.brand} {item.year}</i></p>
										<p className='home__card-brand'>
											<b>Gender:</b> <i>{item.gender}</i>
										</p>
										<p className='home__card-brand home__card-color'>
											<b>ColorWay:</b> <i>{item.colorway}</i>
										</p>
										<p className='home__card-brand home__card-price'>
											<b>Price:</b> $<i>{item.retailPrice}</i>
										</p>
									</div>
									<div className="card-action">
										<a href="#">Learn more</a>
										<button className='card__btn' type='button' onClick={() => addCard(item.id)}>Buy</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Card;