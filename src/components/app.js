import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Layout, Navigation, Card, Button, Icon, TextField } from 'preact-mdl';
import '../js/material.min.js';


import Header from './header';
import Home from './home';
import Profile from './profile';
import Galeria from './galeria';
import Sidebar from './sidebar';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Layout fixed-header fixed-drawer>
					<Header />
					<Sidebar />
					<Layout.Content>
						<Router onChange={this.handleRoute}>
							<Home path="/" />
							<Profile path="/profile/" user="me" />
							<Profile path="/profile/:user" />
							<Galeria path="/galeria/" estilo="clasico" />
							<Galeria path="/galeria/:estilo" />
						</Router>
					</Layout.Content>
				</Layout>
			</div>
		);
	}
}


