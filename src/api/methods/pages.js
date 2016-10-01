import client from '../client';

export function get(id) {
	return client
		.get(`pages/${id}`)
		.then( (response) => {
			return response.json();
		});
}