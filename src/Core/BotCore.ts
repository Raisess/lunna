import { Client } from "discord.js";

import BotCoreUtils from "./BotCoreUtils";

import { ICommand, ICommandCallback, ICommandOptions } from "../interfaces/ICommand";
import { ISpecialWord, ISpecialWordCallback } from "../interfaces/ISpecialWord";

import log from "../utils/messageLog";

import channelValidator from "./validators/channelValidator";
import canUseValidator from "./validators/canUseValidator";

export default class BotCore extends BotCoreUtils {
	private client: Client;
	private prefix: string;
	private token:  string;
	// commands storage
	private commands: Array<ICommand> = [];
	// special messages storage
	private specialWords: Array<ISpecialWord> = [];

	constructor(client: Client, prefix: string = "!", token: string = "") {
		super(client);

		this.client = client;
		this.prefix = prefix.toLowerCase();
		this.token  = token;

		this.start();
	}

	private start(): void {
		this.client.on("ready", async (): Promise<void> => { 
			console.log("Bot running!");

			super.setActivity(`in ${await super.getGuildsSize()} servers with ${await super.getUsersSize()} users.`);
		});

		this.client.on("message", (message: any): void => {
			try {
				log(message);

				if (message.author.bot) return;

				// check if is a command
				if (message.content.toLowerCase().startsWith(this.prefix)) this.onCommandExec(message);

				this.onMessageIncludesExec(message);
			} catch(err) {
				if (message.author.bot) return;

				message.author.send("Stop sending me private messages, pls.");
			}
		});

		this.client.login(this.token);
	}

	// execute command callback
	private onCommandExec(message: any): void {
		const commandOnly: string        = message.content.toLowerCase().split(" ")[1];
		const commandArgs: Array<string> = message.content.split(" ").slice(2);

		const member: any = message.guild.member(message.author);

		for (const command of this.commands) {
			if (commandOnly === command.name) {
				if (command.options) {
					if (command.options.channel && command.options.canUse) {
						if (channelValidator(message.channel.name, command.options.channel)) {
							if (canUseValidator(message.author.id, command.options.canUse)) {
								command.callback({ message, member, args: commandArgs }, this.client);
								return;
							}
						}
					} else if (command.options.channel) {
						if (channelValidator(message.channel.name, command.options.channel)) {
							command.callback({ message, member, args: commandArgs }, this.client);
							return;
						}
					} else if (command.options.canUse) {
						if (canUseValidator(message.author.id, command.options.canUse)) {
							command.callback({ message, member, args: commandArgs }, this.client);
							return;
						}
					} else if (command.options.nsfw) {
						if (message.channel.nsfw) {
							command.callback({ message, member, args: commandArgs }, this.client);
							return;
						}

						message.channel.send("This channel is not nsfw!");
					}

					if (command.options.channel) {
						message.reply(`You only can use that command in a channel named: ${command.options.channel.join(" or ")} 😳 😳 😳`);
					}

					message.react("🚫");
					return;
				} else {
					command.callback({ message, member, args: commandArgs }, this.client);
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

