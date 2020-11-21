import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";

export const pingCommand: ICommand = {
	name:        "ping",
	description: "Ping Lunna server",
	callback:    pingCommandCallback
};

function pingCommandCallback(commandMessage: ICommandMessage, client: any): void {
	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("#028cef");
	embed.addField("🏓 | Pong!", `Latency is ${Date.now() - commandMessage.message.createdTimestamp}ms. API Latency is ${Math.round(client ? client.ws.ping : 0)}ms.`, true);

	commandMessage.message.channel.send(embed);
}

