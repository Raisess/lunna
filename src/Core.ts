import { Client } from "discord.js";

export default class Core {
	private client: Client = new Client();
	private prefix: string;
	private token:  string;
	// commands storage
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

			// check if is a command
			if (message.content.startsWith(this.prefix)) this.onCommandExec(message);
		});

		this.client.login(this.token);
	}

	// execute command callback
	private onCommandExec(message: any): void {
		const commandOnly: string = message.content.split(" ")[1].toLowerCase();

		for (const command of this.commands) {
			if (commandOnly === command[0]) {
				command[1](message, this.client);
				return;
			}
		}

		return;
	}

	// store command
	public onCommand(command: string, callback: Function): void {
		this.commands.push([command.toLowerCase(), callback]);
	}
}

