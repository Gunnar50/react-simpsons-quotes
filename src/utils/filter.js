export const filterCharacters = (filter, data) => {
	return data.filter((item) => {
		return item.character.toLowerCase().includes(filter.toLowerCase());
	});
};
