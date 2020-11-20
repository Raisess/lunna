import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";

export const pingCommand: ICommand = {
	name:     "ping",
	callback: pingCommandCallback
};

function pingCommandCallback(commandMessage: ICommandMessage, client: any) {
	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("#028cef");
	embed.addField("🏓 | Pong!", `Latency is ${Date.now() - commandMessage.message.createdTimestamp}ms. API Latency is ${Math.round(client ? client.ws.ping : 0)}ms.`, true);

	commandMessage.message.channel.send(embed);
}

