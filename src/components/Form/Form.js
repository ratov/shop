import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, action, variant, link, path }) => {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	return (
		<div className="form">
			<h2 className="form__title">{title}</h2>
			<input value={email} type="email" placeholder="Email" className="form__input" onChange={(e) => setEmail(e.target.value)} />
			<input value={pass} type="password" placeholder="password" className="form__input" onChange={(e) => setPass(e.target.value)} />
			<p className="form__text">{variant} <Link to={`/${path}`}>{link}</Link></p>
			<button className="btn" type="submit">{action}</button>
		</div>
	);
};

export default Form;