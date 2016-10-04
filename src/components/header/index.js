import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<div class={style.container}>
					<h5>Espaher Cocinas</h5>
					<nav class={style.nav}>
						<ul>
							<Link href="/">Home</Link>
							<Link href="/profile">Yo</Link>
							<Link href="/galeria">Galeria</Link>
							<Link href="/profile/john">Perico</Link>
						</ul>
					</nav>
				</div>
			</header>
		);
	}
}
