import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";

export const pingCommand: ICommand = {
	name:        "ping",
	description: "Ping Lunna server.",
	callback:    pingCommandCallback
};

function pingCommandCallback(commandMessage: ICommandMessage, client: any): void {
	const serverLatency:   number = Date.now() - commandMessage.message.createdTimestamp;
	const apiLatency:      number = Math.round(client ? client.ws.ping : 0);
	const averangeLatency: number = (serverLatency + apiLatency) / 2;

	const color: string = averangeLatency > 100 ? "#f4090d" : (averangeLatency < 30 ? "#38f409" : "#f7ce02");

	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor(color);
	embed.addField("🏓 Pong!", `Latency is ${serverLatency}ms. API Latency is ${apiLatency}ms.`, true);

	commandMessage.message.channel.send(embed);
}

