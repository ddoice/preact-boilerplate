import { h, Component } from 'preact';
import style from './style';
import Foto from './foto';

const asJson = r => r.json();

export default class Galeria extends Component {

    cargarFotos() {
		fetch(`data/galerias.json`).then(asJson)
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
			<div class={style.profile}>
				<h1>Galeria: { estilo }</h1>
				<p>Este es el Galeria del usuario llamado { estilo }.</p>
				<div>'route' Galeria montada</div>
                    { fotos.map( (fotos, i) => (
						<div>{fotos.id}</div>
					)) }
			</div>
		);
	}
}
