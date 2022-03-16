import React from 'react';
import Form from '../Form/Form';

const Register = () => {
	return (
		<section>
			<Form title={"Регистрация"} action={"Зарегистрироваться"} variant={"Уже зарегистрированны?"} link={"Войти"} path="login" />
		</section>
	);
};

export default Register;