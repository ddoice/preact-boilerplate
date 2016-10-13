import { h, Component } from 'preact';
import { Layout, Navigation, Card, Button, Icon, TextField } from 'preact-mdl';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<Card shadow="4">
				<Card.Title class="graphic">
					<Card.TitleText>Home</Card.TitleText>
				</Card.Title>
				<Card.Text style="text-align:center">
					<Icon icon="person" style="display:block; font-size:100px;" />
					<p>Nothing to see here.</p>
				</Card.Text>
				<Card.Actions style="text-align:right">
					<Button primary>Click Me</Button>
				</Card.Actions>
			</Card>
		);
	}
}
