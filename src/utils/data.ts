const mockedPaginatedData: { [key: number]: Page } = {
	0: {
		data: [
			{
				title: "Product 1",
				description: "Product 1 is amazing",
			},
			{
				title: "Product 2",
				description: "Product 2 is amazing",
			},
			{
				title: "Product 3",
				description: "Product 3 is amazing",
			},
			{
				title: "Product 4",
				description: "Product 4 is amazing",
			},
		],
		prevPage: null,
		currentPage: 0,
		nextPage: 1,
		totalPages: 4,
		size: 16,
	},
	1: {
		data: [
			{
				title: "Product 5",
				description: "Product 1 is amazing",
			},
			{
				title: "Product 6",
				description: "Product 2 is amazing",
			},
			{
				title: "Product 7",
				description: "Product 3 is amazing",
			},
			{
				title: "Product 8",
				description: "Product 4 is amazing",
			},
		],
		prevPage: 0,
		currentPage: 1,
		nextPage: 2,
		totalPages: 4,
		size: 16,
	},
	2: {
		data: [
			{
				title: "Product 9",
				description: "Product 1 is amazing",
			},
			{
				title: "Product 10",
				description: "Product 2 is amazing",
			},
			{
				title: "Product 11",
				description: "Product 3 is amazing",
			},
			{
				title: "Product 12",
				description: "Product 4 is amazing",
			},
		],
		prevPage: 1,
		currentPage: 2,
		nextPage: 3,
		totalPages: 4,
		size: 16,
	},
	3: {
		data: [
			{
				title: "Product 13",
				description: "Product 1 is amazing",
			},
			{
				title: "Product 14",
				description: "Product 2 is amazing",
			},
			{
				title: "Product 15",
				description: "Product 3 is amazing",
			},
			{
				title: "Product 16",
				description: "Product 4 is amazing",
			},
		],
		prevPage: 2,
		currentPage: 3,
		nextPage: null,
		totalPages: 4,
		size: 16,
	},
};

export type Page = {
	data: Data;
	prevPage: number | null;
	currentPage: number;
	nextPage: number | null;
	totalPages: number;
	size: number;
};

export type Resource = {
	title: string;
	description: string;
}

type Data = Array<Resource>;

export const getPageData = (pageNumber: number): Page | null => {
	return mockedPaginatedData[pageNumber]
		? mockedPaginatedData[pageNumber]
		: null;
}
