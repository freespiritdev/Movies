import React from 'react';
import { Link } from 'react-router';

export default function MovieStream({ movie }) {
	return (
		<div className="stream">
			<div id="title">
				<h6>{movie.title}</h6>
			</div>
			<div>
				<img src={movie.photo} alt="Movie Photo" />
			</div>
			<div>
				<Link to={`/movies/${movie._id}`} className="btn btn-warning">Edit</Link>
				<div className="btn btn-danger">Remove</div>
			</div>
		</div>
	);
}

MovieStream.propTypes = {
	movie: React.PropTypes.object.isRequired
}