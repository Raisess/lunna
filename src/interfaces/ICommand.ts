export interface ICommand {
	name:        string;
	description: string;
	callback:    ICommandCallback;
	options?:	   ICommandOptions;
}

export interface ICommandMessage {
	message: any;
	args?:   Array<string>
}

export interface ICommandCallback {
	(message: ICommandMessage, client?: any): void;
}

export interface ICommandOptions {
	channel?: Array<string>;
	canUse?:  Array<string>;
}

