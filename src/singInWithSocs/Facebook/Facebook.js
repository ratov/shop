import React, { useContext } from 'react';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

import { CustomContext } from "../../Context";

const Facebook = ({ navigate }) => {

	const provider = new FacebookAuthProvider();
	const { addUser } = useContext(CustomContext);

	const addUserWidthFacebook = () => {
		const auth = getAuth();
		auth.languageCode = 'it';
		signInWithPopup(auth, provider)
			.then(({ user }) => {
				console.log(user);
				addUser({
					email: user.email,
					token: user.accessToken,
					id: user.uid
				});
				navigate('/');
			}).catch(console.log);
	}

	return (
		<li className="form__list-item" onClick={() => addUserWidthFacebook()}>
			<FontAwesomeIcon icon={faFacebookSquare} />
		</li>
	);
};

export default Facebook;