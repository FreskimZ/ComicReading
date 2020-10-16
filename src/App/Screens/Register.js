import React, { useState, useCallback, useContext } from 'react';
import fire from '../../config/Fire';
import '../../styles/Register.css';

function Register({ history }) {
	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault();

			const { email, password } = event.target.elements;

			try {
				await fire.auth().createUserWithEmailAndPassword(email.value, password.value);
				history.push('/');
			} catch (error) {
				alert(error);
			}
		},
		[history]
	);

	return (
		<div className='registerContainer'>
			<div className='formContainer'>
				<p>Register</p>
				<form className='registerForm' onSubmit={handleSubmit}>
					<label className='registerLabel'>
						<p className='registerText'>E-Mail Adress</p>
						<input className='registerInput' type='email' name='email' />
					</label>
					<label className='registerLabel'>
						<p className='registerText'>Password</p>
						<input className='registerInput' type='password' name='password' />
					</label>
					<div>
						<input className='registerSubmit' type='submit' />
					</div>
				</form>
			</div>
		</div>
	);
}

export default Register;
