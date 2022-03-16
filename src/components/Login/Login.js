import React from 'react';
import Form from '../Form/Form';

const Login = () => {
	return (
		<section>
			<Form title={"Войти в аккаунт"} action={"Войти"} variant={"Not register"} link={"Create New Accaunt"} path="register" />
		</section>
	);
};

export default Login;