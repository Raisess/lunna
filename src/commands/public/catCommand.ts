import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import catGetService from "../../services/imageServices/catGetService";

export const catCommand: ICommand = {
	name:        "cat",
	description: "Cat care commands.",
	callback:    catCommandCallback
};

async function catCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const user:     any          = commandMessage.message.author;
	const catImage: string       = await catGetService();
	const embed:    MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setTitle(`😸 ${user.username}'s see this cat:`);
	embed.setImage(catImage);
	embed.setFooter("pspspsps");

	commandMessage.message.channel.send(embed);
}

