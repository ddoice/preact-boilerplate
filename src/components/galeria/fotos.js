import { h, Component } from 'preact';

export default class Fotos extends Component {

	render({ foto }) {

		foto.photo = 'fotos/' + foto.original;

		return (
			<div class="three columns">
				<p>{foto.id}</p>
				<p>{foto.titulo}</p>
				<p>{foto.original}</p>
				<img src={foto.photo} class="u-max-full-width"></img>
			</div>
		);
	}
}