import { h, Component } from 'preact';
import style from './style';
import Fotos from './fotos';
//https://github.com/developit/hn_minimal/blob/master/src/App.js

const asJson = r => r.json();

export default class Galeria extends Component {

	state = { fotos: [] };

    cargarFotos() {
		fetch('data/galerias.json').then(asJson)
			.then( fotos => this.setState({ fotos }) );
	}

	// gets called when this route is navigated to
	componentDidMount() {
        this.cargarFotos();
	}

	// gets called just before navigating away from the route
	//componentWillUnmount() {
	//}


	// Note: `user` comes from the URL, courtesy of our router
	render({ estilo }, { fotos }) {
		return (
			<div class="container">
				<div class={style.fotos}>
					<h6>FOTOS</h6>
					<h2>{ estilo }</h2>
					<div class="row">
						{ 	fotos.map( (fotos, i) => (
							<Fotos foto={fotos}/>
						)) }
					</div>
				</div>
			</div>
		);
	}
}
