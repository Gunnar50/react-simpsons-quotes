export const filterByName = (data, toFilter, type) => {
	if (type === "name-filter") {
		return data.filter((item) => {
			return item.character.toLowerCase().includes(toFilter.toLowerCase());
		});
	}

	return data.filter((item) => {
		return item.quote.toLowerCase().includes(toFilter.toLowerCase());
	});
};
