import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>

			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">Brand Shop</a>
					{/* <Link to="/" className="brand-logo">Brand Shop</Link> */}
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li><Link to="/men">Men</Link></li>
						<li><Link to="/women">Women</Link></li>
						<li><Link to="/child">Child</Link></li>
						<li><Link to="/cart">Cart</Link></li>
					</ul>
				</div>
			</nav>

		</header>
	);
};

export default Header;