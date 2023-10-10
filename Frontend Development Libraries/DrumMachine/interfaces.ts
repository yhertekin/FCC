export interface IKit {
	id: string;
	key: string;
	src: string;
}

export interface IMusicSet {
	heaterKit: IKit[];
	smoothPianoKit: IKit[];
}
