import React from "react";

const Item = props => {
	const { film } = props;

	return (
		<div className="uk-section uk-section-xsmall uk-section-secondary uk-light">
			<div className="uk-container">
				<h3>{film.title}</h3>
				<p>Score: {film.score}</p>
				<p>Year: {film.year}</p>
				<p>Actors: {film.actors}</p>
				<p>Producers: {film.producers}</p>
				<p>Synopsis: {film.synopsis}</p>

				{film.evaluations.map(e => (
					<Comment evaluation={e} />
				))}

				<hr />
			</div>
		</div>
	);
};

const Comment = props => {
	const { evaluation } = props;

	return (
		<div className="uk-section uk-comment-meta uk-section-xsmall uk-section-secondary uk-light uk-margin-large-left">
			<hr className="uk-divider-small" />
			<div className="uk-container">
				<h4>{evaluation.evaluator}</h4>
				<p>Score: {evaluation.score}</p>
				<p>Comment: {evaluation.comment}</p>
			</div>
		</div>
	);
};

export default Item;
