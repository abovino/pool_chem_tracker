import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const Login = () => {
	const { isAuth, dispatch } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const submitLogin = async (e) => {
		e.preventDefault();
		const payload = { username, password };
		const res = await fetch('http://localhost:3000/api/auth/login', {
			method: 'POST',
			body: JSON.stringify(payload),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (res.status === 200) {
			const { token } = await res.json();
			localStorage.setItem('jwt', token);
			dispatch({
				type: 'AUTHENTICATE',
				isAuth: true,
			});
		}
	}
	return (
		<div>
			<form onSubmit={(e) => submitLogin(e)}>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login;