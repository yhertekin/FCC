export interface IQuote {
	_id: string;
	content: string;
	author: string;
	tags: string[];
	authorSlug: string;
	length: number;
	dateAdded: string;
	dateModified: string;
}

export interface Icon {
	fill?: string;
	width?: string;
	height?: string;
}
