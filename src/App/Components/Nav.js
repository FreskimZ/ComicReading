import React, { useContext } from 'react';
import { AuthContext } from '../../config/Auth';
import fire from '../../config/Fire';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
	const { currentUser } = useContext(AuthContext);

	const left = currentUser ? (
		<div className='navButtons2 button' onClick={() => fire.auth().signOut()}>
			<p>Logout</p>
		</div>
	) : (
		<div className='navButtons2'>
			<Link className='button' to='/login'>
				<p>Login</p>
			</Link>
			<Link className='button' to='/register'>
				<p>Register</p>
			</Link>
		</div>
	);

	return (
		<div className='Nav'>
			<div className='navButtons1'>
				<Link className='button' to='/'>
					<p>Home</p>
				</Link>
				<Link className='button' to='/latest'>
					<p>Latest</p>
				</Link>
				<Link className='button' to='/comics'>
					<p>Comics</p>
				</Link>
			</div>
			{left}
		</div>
	);
}

export default Nav;

{
	/*  */
}
