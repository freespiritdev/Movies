export const SET_MOVIES = 'SET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const MOVIE_FOUND = 'MOVIE_FOUND';
export const MOVIE_UPDATED = 'MOVIE_UPDATED';

function handleResponse(response){
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusMsg);
		error.response = response;
		throw error;
	}

}

export function addMovie(movie) {
	return {
		type: ADD_MOVIE,
		movie
	}
}

export function setMovies(movies) {
	return {
		type: SET_MOVIES,
		movies
	}
}

export function movieFound(movie) {
	return {
		type: MOVIE_FOUND,
		movie
	}

}

export function movieUpdated(movie) {
	return {
		type: MOVIE_UPDATED,
		movie
	}
}

export function saveMovie(data) {
	return dispatch => {
		return fetch('/api/movies', {
			method: 'post',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(addMovie(data.movie)));
	}
}

export function updateMovie(data) {
	return dispatch => {
		return fetch(`/api/movies/${data._id}`, {
			method: 'put',
			body:   JSON.stringify(data), 
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(data => dispatch(movieUpdated(data.movie)));
	}
}


export function getMovies() {
	return dispatch => {
		fetch('/api/movies')
			.then(res => res.json())
			.then(data => dispatch(setMovies(data.movies)));
		//return a promise
	}
}

export function getMovie(id) {
	return dispatch => {
		fetch(`/api/movies/${id}`)
			.then(res => res.json())
			.then(data => dispatch(movieFound(data.movie)));
	}
}