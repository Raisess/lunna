import { Client } from "discord.js";

export default class Core {
	private client: Client = new Client();
	private prefix: string;
	private token:  string;

	private commands: Array<[string, Function]> = [];

	constructor(prefix: string = "!", token: string = "") {
		this.prefix = prefix;
		this.token  = token;

		this.start();
	}

	private start(): void {
		this.client.on("ready", (): void => console.log("bot running!"));

		this.client.on("message", (message: any): void => {
			if (message.author.bot) return;

			if (message.content.startsWith(this.prefix)) this.onMessage(message);
		});

		this.client.login(this.token);
	}

	private onMessage(message: any): void {
		const commandOnly: string = message.content.split(" ")[1].toLowerCase();

		for (const command of this.commands) {
			if (commandOnly === command[0]) {
				command[1](message);
				return;
			}
		}

		return;
	}

	public command(command: string, callback: Function): void {
		this.commands.push([command.toLowerCase(), callback]);
	}
}

