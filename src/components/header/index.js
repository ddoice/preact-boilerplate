import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<h1>Espaher Cocinas</h1>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/profile">Yo</Link>
					<Link href="/galeria">Galeria</Link>
					<Link href="/profile/john">Perico</Link>
				</nav>
			</header>
		);
	}
}
