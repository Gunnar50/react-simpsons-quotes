export const sortData = (data, type) => {
	// create a sorting map for simplicity
	const sortingMapping = {
		"name-az": { key: "character", order: 1 },
		"name-za": { key: "character", order: -1 },
		"quote-az": { key: "quote", order: 1 },
		"quote-za": { key: "quote", order: -1 },
	};

	// make sure the type exists in the the map
	const { key, order } = sortingMapping[type] || {};

	// check if the key is not empty
	if (key) {
		// sort the data according to the key and order from the map
		data.sort((item1, item2) => {
			// if they are the same, just return 0 (do not change position)
			if (item1[key] === item2[key]) return 0;

			// otherwise return 1 or -1 depending on the order
			return item1[key] > item2[key] ? order : -order;
		});
	}
};
