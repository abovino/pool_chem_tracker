import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Login from './Auth/Login';
import PrivateRoute from './Auth/PrivateRoute';
import AuthContext from '../context/auth-context';
import authReducer from '../reducers/authReducer';

const Home = () => (
	<h1>Home</h1>
)

const Protected = () => <h1>Protected</h1>;

const App = () => {
	const [isAuth, dispatch] = useReducer(authReducer, { isAuth: false });
	return (
		<Router>
		<AuthContext.Provider value={{ isAuth, dispatch}}>
			
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" component={Login} />
					<PrivateRoute path='/protected' component={Protected} />
				</Switch>
			
		</AuthContext.Provider>
		</Router>
	)
}

export default hot(module)(App);