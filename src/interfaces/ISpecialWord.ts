export interface ISpecialWord {
	words:    Array<string>;
	callback: ISpecialWordCallback;
}

export interface ISpecialWordCallback {
	(message: any, client?: any): void;
}

