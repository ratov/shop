import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {CustomContext} from "../../Context";

const Google = () => {

	const { addUser } = useContext(CustomContext);
	const provider = new GoogleAuthProvider();
	const navigate = useNavigate();

	const addUserWithGoogle = () => {
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
			}).catch(console.error);
	};

	return (
		<li className="form__list-item" onClick={() => addUserWithGoogle()}>
			<FontAwesomeIcon icon={faGoogle} />
		</li>
	);
};

export default Google;