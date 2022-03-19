import React, { useState } from 'react';
import Google from "../../singInWithSocs/Google/Google";

import { Link } from 'react-router-dom';
import { faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({ handleClick, title, action, variant, link, path }) => {
	
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');

	return (
		<div className="form">
			<h2 className="form__title">{title}</h2>
			<input value={email} type="email" placeholder="Email" className="form__input" onChange={(e) => setEmail(e.target.value)} />
			<input value={pass} type="password" placeholder="password" className="form__input" onChange={(e) => setPass(e.target.value)} />
			<p className="form__text">{variant} <Link to={`/${path}`}>{link}</Link></p>

			<ul className="form__list">
				<Google />
				<li className="form__list-item">
					<FontAwesomeIcon icon={faFacebookSquare} />
				</li>
				<li className="form__list-item">
					<FontAwesomeIcon icon={faGithub} />
				</li>
			</ul>
			<button className="btn" onClick={() => handleClick(email, pass)} type="submit">{action}</button>
		</div>
	);
};

export default Form;