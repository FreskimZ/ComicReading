import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Latest from './Screens/Latests';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Register from './Screens/Register';
import Comics from './Screens/Comics/Comics';
import Comic from './Screens/Comics/Comic';
import Read from './Screens/Comics/Read';
import Nav from './Components/Nav';
import ScrollToTOp from './Components/ScrollToTop';
import { ComicProvider } from './Context/ComicContext';
import { AuthProvider } from '../config/Auth';
import '../styles/App.css';

function App() {
	return (
		<AuthProvider>
			<ComicProvider>
				<Router>
					<ScrollToTOp />
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
