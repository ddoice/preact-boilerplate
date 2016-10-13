import { h, Component } from 'preact';
import style from './style';
import Fotos from './fotos';
//https://github.com/developit/hn_minimal/blob/master/src/App.js

const asJson = r => r.json();

export default class Galeria extends Component {

	state = { fotos: [] };


    cargarFotos() {
		console.log('cargamos fotos');
		fetch('../data/galerias.json').then(asJson)//.then( fotos => fotos.filter(this.filtrarFotos, this.props) )
			.then( fotos => this.setState({ fotos }) );
	}

	// gets called when this route is navigated to
	componentDidMount() {
        this.cargarFotos();
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		//this.cargarFotos();
	}

	// Note: `user` comes from the URL, courtesy of our router
	render({ estilo }, { fotos }) {

		function filtrarFotos(el) {
			if(this.estilo === 'todas')
				return true;
			else
				return el.tipo.split(',').indexOf(this.estilo) !== -1 || el.tags.split(',').indexOf(this.estilo) !== -1; 
		}

		function orderAleatorio(fotos) {
			var copia = fotos.splice(0);
			var nuevo = [];
			for(var n = 0; n< copia.length; n++) {
				nuevo.push(copia.splice(Math.floor(Math.random() * copia.length),1)[0]);
				console.log('iter'+n)
			}
			return nuevo;
		}

		window.public = orderAleatorio;

		return (
			<div class="container">
				<div class={style.fotos}>
					<h6>FOTOS</h6>
					<h2>{ estilo }</h2>
					<div class="mdl-grid">
						{ fotos.filter(filtrarFotos, {estilo}).map( (fotos, i) => (
							<Fotos foto={fotos}/>
						)) }
					</div>
				</div>
			</div>
		);
	}
}
