const generateUniqueID = (data) => {
	let id;

	while (true) {
		id = Math.round(Math.random() * 100000);
		if (!data.some((character) => character.id === id)) break;
	}
	return id;
};

export const addIDs = (data) => {
	return data.map((character) => {
		const id = generateUniqueID(data);
		return { ...character, id, liked: false };
	});
};
