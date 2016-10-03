import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Keli</h1>
				<p>Este es el componente Keli.</p>
			</div>
		);
	}
}
