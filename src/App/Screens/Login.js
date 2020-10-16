import React, { useContext, useCallback } from 'react';
import fire from '../../config/Fire';
import { AuthContext } from '../../config/Auth';
import '../../styles/Login.css';

function Login({ history }) {
	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault();
			const { email, password } = event.target.elements;
			try {
				await fire.auth().signInWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	const { currentUser } = useContext(AuthContext);

	return (
		<div className='loginContainer'>
			<div className='formContainer'>
				<p>Login</p>
				<form className='loginForm' onSubmit={handleSubmit}>
					<label className='loginLabel'>
						<p className='loginText1'>{'E-mail address:  '}</p>
						<input className='loginInput' type='email' name='email' />
					</label>
					<label className='loginLabel'>
						<p className='loginText1'>{'Password:  '}</p>
						<input className='loginInput' type='password' name='password' />
					</label>
					<div>
						<input className='loginSubmit' type='submit' value='Login' />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
