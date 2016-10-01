import client from '../client';

export function get(id) {
	client
		.get(`posts/${id}`)
		.then( (response) => {
			return response.json();
		})
		.catch( (response) => {
			throw response.json();
		});
}