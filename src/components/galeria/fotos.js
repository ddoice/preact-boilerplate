import { h, Component } from 'preact';
import { Layout, Navigation, Card, Button, Icon, TextField } from 'preact-mdl';
import style from './style';

export default class Fotos extends Component {

	render({ foto }) {

		foto.photo = {
      		'backgroundImage': 'url(' + '../fotos/' + foto.original + ')',
			'background-size': 'cover'
    	};
		

		return (
			<div class="mdl-cell mdl-cell--6-col">
				<Card shadow="2" style={foto.photo}>
					<Card.Title class="mdl-card--expand">
					</Card.Title>
					<Card.Actions class={style.pie}>
						<span class={style.texto}>Click Me</span>
					</Card.Actions>
				</Card>
			</div>
		);
	}
}