import React from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, action, variant, link, path }) => {
	return (
		<div className="form">
			<h2 className="form__title">{title}</h2>
			<input type="email" placeholder="Email" className="form__input" />
			<input type="password" placeholder="password" className="form__input" />
			<p className="form__text">{variant} <Link to={`/${path}`}>{link}</Link></p>
			<button className="btn" type="submit">{action}</button>
		</div>
	);
};

export default Form;