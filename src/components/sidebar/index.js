import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { Layout, Navigation, Card, Button, Icon, TextField } from 'preact-mdl';

import Header from '../header';
import Home from '../home';
import Profile from '../profile';
import Galeria from '../galeria';

//https://github.com/developit/hn_minimal/blob/master/src/App.js

export default class Sidebar extends Component {
	shouldComponentUpdate() {
		return false;
	}

	hide = () => {
		this.base.classList.remove('is-visible');
	};

	render() {
		return (
			<Layout.Drawer onClick={this.hide}>
				<Layout.Title>Example App</Layout.Title>
				<Navigation>
					<Navigation.Link href="/">Home</Navigation.Link>
					<Navigation.Link href="/profile">Profile</Navigation.Link>
					<Navigation.Link href="/profile/john">John</Navigation.Link>
                    <Navigation.Link href="/galeria/moderno">Galeria</Navigation.Link>
					<Navigation.Link href="/galeria/modernas">Modernas</Navigation.Link>
					<Navigation.Link href="/galeria/rusticas">Rusticas</Navigation.Link>
					<Navigation.Link href="/galeria/isla">Con Isla</Navigation.Link>
				</Navigation>
			</Layout.Drawer>
		);
	}
}