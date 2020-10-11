import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Latest from './Latests';
import Comics from './Comics';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Comic from './Comic';
import Read from './Read';
import { ComicProvider } from './ComicContext';
import { AuthProvider } from '../config/Auth';
import '../styles/App.css';

function App() {
	return (
		<AuthProvider>
			<ComicProvider>
				<Router>
					<div className='App'>
						<Nav />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/latest' exact component={Latest} />
							<Route path='/comics' exact component={Comics} />
							<Route path='/comics/:name' exact component={Comic} />
							<Route path='/comics/:name/:chapter' exact component={Read} />
							<Route path='/login' exact component={Login} />
							<Route path='/register' exact component={Register} />
						</Switch>
					</div>
				</Router>
			</ComicProvider>
		</AuthProvider>
	);
}

export default App;
