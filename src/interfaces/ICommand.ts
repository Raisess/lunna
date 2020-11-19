import { Client } from "discord.js";

export interface ICommandCallback {
	(message: any, agrs?: Array<string>, client?: Client): void;
}

export interface ICommandOptions {
	channel:  string;
	needArgs: boolean;
}

