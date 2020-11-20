export default function log(message: any): void {
	if (process.env.MESSAGE_LOG === "true") {
		console.log(`[${new Date().toLocaleString()} | ${message.guild.name} >> ${message.channel.name}]<@${message.author.id}>${message.author.username}:`,
								message.content);
	}
}

