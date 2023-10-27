export const filterByName = (data, toFilter) => {
	return data.filter((item) => {
		return item.character.toLowerCase().includes(toFilter.toLowerCase());
	});
};
