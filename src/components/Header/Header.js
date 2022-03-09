import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>

			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="brand-logo">Brand Shop</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li className="header__link"><NavLink to="/men">Men</NavLink></li>
						<li className="header__link"><NavLink to="/women">Women</NavLink></li>
						<li className="header__link"><NavLink to="/child">Child</NavLink></li>
						<li className="header__link"><NavLink to="/cart">Cart</NavLink></li>
					</ul>
				</div>
			</nav>

		</header>
	);
};

export default Header;