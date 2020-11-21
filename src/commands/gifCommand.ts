import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import tenorGetService from "../services/gifServices/tenorGetService";
import { MessageEmbed } from "discord.js";

export const gifCommand: ICommand = {
	name:        "gif",
	description: "Get a gif from tenor.",
	callback:    gifCommandCallback
};

async function gifCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const search: string = commandMessage.args ? commandMessage.args.join(" ") : "";
	const gif:    string = await tenorGetService(search);

	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("#3ca0f1");
	embed.setTitle(`Random gif of ${search !== "" ? search : "hmm... random"}:`);
	embed.setImage(gif);
	embed.setFooter("Powered by Tenor");

	commandMessage.message.channel.send(embed);
}

