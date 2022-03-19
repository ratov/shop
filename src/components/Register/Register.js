import React, { useContext } from 'react';
import { CustomContext } from '../../Context';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const { addUser } = useContext(CustomContext);
	const navigate = useNavigate();
	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				addUser({
					email: user.email,
					token: user.accessToken,
					id: user.uid
				});
				navigate('/');
			})
			.catch();
	};

	return (
		<section>
			<Form handleClick={handleRegister} title={"Регистрация"} action={"Зарегистрироваться"} variant={"Уже зарегистрированны?"} link={"Войти"} path="login" />
		</section>
	);
};

export default Register;