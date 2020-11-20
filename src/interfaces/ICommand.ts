import { Client } from "discord.js";

export interface ICommand {
	name:     string;
	callback: ICommandCallback;
	options: 	ICommandOptions | undefined;
}

export interface ICommandMessage {
	message: any;
	args?:   Array<string>
}

export interface ICommandCallback {
	(message: ICommandMessage, client?: Client): void;
}

export interface ICommandOptions {
	channel?: Array<string>;
	canUse?:  Array<string>;
}

