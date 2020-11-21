import { Client } from "discord.js";

import { ICommand, ICommandCallback, ICommandOptions } from "../interfaces/ICommand";
import { ISpecialWord, ISpecialWordCallback } from "../interfaces/ISpecialWord";

import log from "../utils/messageLog";

import channelValidator from "./validators/channelValidator";
import canUseValidator from "./validators/canUseValidator";

export default class BotCore {
	private client: Client = new Client();
	private prefix: string;
	private token:  string;
	// commands storage
	private commands: Array<ICommand> = [];
	// special messages storage
	private specialWords: Array<ISpecialWord> = [];

	constructor(prefix: string = "!", token: string = "") {
		this.prefix = prefix.toLowerCase();
		this.token  = token;

		this.start();
	}

	private start(): void {
		this.client.on("ready", async (): Promise<void> => { 
			console.log("bot running!");

			this.setActivity(`in ${await this.getGuildsSize()} servers with ${await this.getUsersSize()} users.`);
		});

		this.client.on("message", (message: any): void => {
			log(message);

			if (message.author.bot) return;

			// check if is a command
			if (message.content.toLowerCase().startsWith(this.prefix)) this.onCommandExec(message);

			this.onMessageIncludesExec(message);
		});

		this.client.login(this.token);
	}

	public async getGuildsSize(): Promise<number> {
		// @ts-ignore
		const guildsSize: number = await this.client.guilds.cache.size;

		return guildsSize;
	}

	public async getUsersSize(): Promise<number> {
		// @ts-ignore
		const usersSize: number = await this.client.users.cache.size;

		return usersSize;
	}

	// set a activity to bot
	public setActivity(game: string, type: string = "PLAYING"): void {
		this.client.user.setActivity(game, { type });
	}

	// execute command callback
	private onCommandExec(message: any): void {
		const commandOnly: string        = message.content.toLowerCase().split(" ")[1];
		const commandArgs: Array<string> = message.content.split(" ").slice(2);

		for (const command of this.commands) {
			if (commandOnly === command.name) {
				if (command.options) {
					if (command.options.channel && command.options.canUse) {
						if (channelValidator(message.channel.name, command.options.channel)) {
							if (canUseValidator(message.author.id, command.options.canUse)) {
								command.callback({ message, args: commandArgs }, this.client);
								return;
							}
						}
					} else if (command.options.channel) {
						if (channelValidator(message.channel.name, command.options.channel)) {
							command.callback({ message, args: commandArgs }, this.client);
							return;
						}
					} else if (command.options.canUse) {
						if (canUseValidator(message.author.id, command.options.canUse)) {
							command.callback({ message, args: commandArgs }, this.client);
							return;
						}
					}

					if (command.options.channel) {
						message.reply(`you only can use that command in a channel named: ${command.options.channel.join(" or ")} 😳 😳 😳`);
					}

					message.react("🚫");
					return;
				} else {
					command.callback({ message, args: commandArgs }, this.client);
					return;
				}
			}
		}

		return;
	}

	// store command
	public onCommand(command: string, description: string, callback: ICommandCallback, options?: ICommandOptions): void {
		this.commands.push({ name: command.toLowerCase(), description, callback, options });
	}

	// execute a special message callback
	private onMessageIncludesExec(message: any): void {
		const content: string = message.content.toLowerCase();

		for (const specialWord of this.specialWords) {
			for (let i: number = 0; i < specialWord.words.length; i++) {
				if (content.includes(specialWord.words[i])) {
					specialWord.callback(message);
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

