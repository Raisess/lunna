import { Client } from "discord.js";

export interface ICommand {
	name:     string;
	callback: ICommandCallback;
	options: 	ICommandOptions | undefined;
}

export interface ICommandCallback {
	(message: any, agrs?: Array<string>, client?: Client): void;
}

export interface ICommandOptions {
	channel?: Array<string>;
	canUse?:  Array<string>;
}

