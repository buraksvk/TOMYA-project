import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './css/icons.css';
import "./css/ui.css";
import "./css/style.css";
import "./bootstrap/css/bootstrap.min.css";
import "./fontawesome/css/all.min.css"
//import Login from './components/layout/Login';
import Exchange from './components/layout/exchange'
import BasicView from './components/layout/basicView'


const App = () =>
		<Router>
			<Fragment>
					<Switch>
						<Route exact path="/" component={Exchange} />
						<Route exact path="/exchange" component={Exchange} />
						<Route exact path="/basic" component={BasicView} />
					</Switch>
			</Fragment>
		</Router>

export default App;
