// Example User CRUD API

const url = new URL(`http://www.example.com`);

export const getUser = async (body, headers) => {
	const response = await fetch(url, {
		method: `GET`,
		headers: headers,
		body: body,
	});
	console.log(response);
	return response;
};

export const createUser = body => {
	fetch(url, {
		method: `POST`,
		body: body,
	});
};

export const updateUser = body => {
	fetch(url, {
		method: `PUT`,
		body: body,
	});
};

export const deleteUser = body => {
	fetch(url, {
		method: `DELETE`,
		body: body,
	});
};
