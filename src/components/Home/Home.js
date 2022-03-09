import React from 'react';
// import notImage from '../../assets/noteImage.jpg';
import notImage from '../../assets/notImage.png';

const Home = ({ shoes }) => {

	return (
		<section className='home'>
			<div className="container">
				<div className="row">
					{shoes.map((item, idx) => {
						return (
							<div className="col s12 m4">
								<div className="card">
									<div className="card-image">
										<img className='home__card-image' src={item.media.thumbUrl === null ? notImage : item.media.thumbUrl} alt='shoes image' />
									</div>
									<div className="card-content">
										<h3 className="home__card-title">{item.name}</h3>
										<p>I am a very simple card. I am good at containing small bits of information.
											I am convenient because I require little markup to use effectively.</p>
									</div>
									<div className="card-action">
										<a href="#">This is a link</a>
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

export default Home;