export const sortData = (data, sort) => {
	// sort data
	data.sort((item1, item2) => {
		if (item1.character > item2.character) return 1;
		else if (item1.character < item2.character) return -1;
		return 0;
	});

	if (sort === "za") {
		data.reverse();
	}
};
