import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuth } = useContext(AuthContext);
	console.log('isAuth', isAuth);
	return (
		<Route {...rest} render={(props) => (
			isAuth.isAuth === true
			? <Component {...props} />
			: <Redirect to='/login' />
		)} />
	)
}

export default PrivateRoute;