import { Client } from "discord.js";

export default class Core {
	private client: Client = new Client();
	private prefix: string;
	private token:  string;
	// commands storage
	private commands: Array<[string, Function]> = [];
	// special messages storage
	private messages: Array<[string, Function]> = [];

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
			if (message.content.startsWith(this.prefix)){ 
				this.onCommandExec(message);
			} else {
				this.onMessageExec(message);
			}
		});

		this.client.login(this.token);
	}

	// execute command callback
	private onCommandExec(message: any): void {
		const commandOnly: string = message.content.split(" ")[1].toLowerCase();

		for (const commandTuple of this.commands) {
			if (commandOnly === commandTuple[0]) {
				commandTuple[1](message, this.client);
				return;
			}
		}

		return;
	}

	// store command
	public onCommand(command: string, callback: Function): void {
		this.commands.push([command.toLowerCase(), callback]);
	}

	// execute message callback
	private onMessageExec(message: any): void {
		const content: string = message.content.toLowerCase();

		for (const messageTuple of this.messages) {
			if (content === messageTuple[0]) {
				messageTuple[1](message, this.client);
				return;
			}
		}

		return;
	}

	// store a special message
	public onMessage(content: string, callback: Function): void {
		this.messages.push([content.toLowerCase(), callback]);
	}
}

