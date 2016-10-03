import { h, Component } from 'preact';

export default class Foto extends Component {
	render({ foto }) {
		return (
			<div class="foto">
				<div class="vitals">
					<div class="score">{foto.titulo}</div>
				</div>
				<div class="content">
					<div class="title">
						<a target="_blank" href={item.url}>{item.descripcion}</a>
						<span class="domain">({foto.url})</span>
					</div>
				</div>
			</div>
		);
	}
}