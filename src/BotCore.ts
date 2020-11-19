import { Client } from "discord.js";

import { ICommand, ICommandCallback, ICommandOptions } from "./interfaces/ICommand";
import { ISpecialWord, ISpecialWordCallback } from "./interfaces/ISpecialWord";

export default class BotCore {
	private client: Client = new Client();
	private prefix: string;
	private token:  string;
	// commands storage
	private commands: Array<ICommand> = [];
	// special messages storage
	private specialWords: Array<ISpecialWord> = [];

	constructor(prefix: string = "!", token: string = "") {
		this.prefix = prefix;
		this.token  = token;

		this.start();
	}

	private start(): void {
		this.client.on("ready", (): void => console.log("bot running!"));

		this.client.on("message", (message: any): void => {
			if (message.author.bot) return;

			// check if is a command
			if (message.content.startsWith(this.prefix)) this.onCommandExec(message);

			this.onMessageIncludesExec(message);
		});

		this.client.login(this.token);
	}

	// execute command callback
	private onCommandExec(message: any): void {
		const commandOnly: string        = message.content.toLowerCase().split(" ")[1];
		const commandArgs: Array<string> = message.content.toLowerCase().split(" ").slice(2);

		for (const command of this.commands) {
			if (commandOnly === command.name) {
				if (command.options && command.options.channel === message.channel.name) {
					command.callback(message, commandArgs, this.client);
					return;
				} else if (!command.options || !command.options.channel) {
					command.callback(message, commandArgs, this.client);
					return;
				}
			}
		}

		return;
	}

	// store command
	public onCommand(command: string, callback: ICommandCallback, options?: ICommandOptions): void {
		this.commands.push({ name: command.toLowerCase(), callback, options });
	}

	// execute a special message callback
	private onMessageIncludesExec(message: any): void {
		const content: string = message.content.toLowerCase();

		for (const specialWord of this.specialWords) {
			for (let i: number = 0; i < specialWord.words.length; i++) {
				if (content.includes(specialWord.words[i])) {
					specialWord.callback(message, this.client);
					return;
				}
			}
		}

		return;
	}

	// store special messages
	public onMessageIncludes(words: Array<string>, callback: ISpecialWordCallback): void {
		this.specialWords.push({ 
			words: words.map((word: string) => word.toLowerCase()),
			callback
		});
	}
}

