import React, { useContext } from 'react';
import { CustomContext } from '../../Context';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

	const navigate = useNavigate();
	const { addUser } = useContext(CustomContext)

	const hadleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				addUser({
					email: user.email,
					token: user.accessToken,
					id: user.uid
				});
				navigate('/');
			})
			.catch(console.error);
	};

	return (
		<section>
			<Form handleClick={hadleLogin} title={"Войти в аккаунт"} action={"Войти"} variant={"Not register"} link={"Create New Accaunt"} path="register" />
		</section>
	);
};

export default Login;