import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { CustomContext } from "../../Context";

const GitHub = ({ navigate }) => {

	const provider = new GithubAuthProvider();
	const { addUser } = useContext(CustomContext);

	const addUserWidthGitHub = () => {
		const auth = getAuth();
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
		<li className="form__list-item">
			<FontAwesomeIcon icon={faGithub} onClick={() => addUserWidthGitHub()} />
		</li>
	);
};

export default GitHub;