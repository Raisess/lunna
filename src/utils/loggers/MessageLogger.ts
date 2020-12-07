export default class MessageLogger {
	private message: any;

	constructor(message: any) {
		this.message = message;

		if (process.env.MESSAGE_LOG === "true") this.print();
	}

	private print(): void {
		console.log(`[${new Date().toLocaleString()} | ${this.message.guild.name} >> ${this.message.channel.name}]<@${this.message.author.id}>${this.message.author.username}:`,
								this.message.content);
	}
}

