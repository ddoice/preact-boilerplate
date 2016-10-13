import { h, Component } from 'preact';
import { Layout, Navigation, Card, Button, Icon, TextField } from 'preact-mdl';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<Layout.Header>
				<Layout.HeaderRow>
					<Layout.Title>
						<a href="/">Example</a>
					</Layout.Title>
					<Layout.Spacer />
					<TextField
						placeholder="Search"
						type="search"
						style="background-color:#FFF; color:#000; padding:10px;"
					/>
				</Layout.HeaderRow>
			</Layout.Header>
		);
	}
}
