import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import pixabayGetService from "../services/imageServices/pixabayGetService";

export const imageCommand: ICommand = {
	name:     "img",
	callback: imageCommandCallback
};

async function imageCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const search: string = commandMessage.args ? commandMessage.args.join(" ").toLowerCase() : "";

	const image: string | undefined = await pixabayGetService(search);

	if (image) {
		const embed: MessageEmbed = new MessageEmbed();

		embed.setColor("#04d840");
		embed.setTitle(`Random ${search} image:`);
		embed.setImage(image);
		embed.setFooter("Powered by Pixabay");

		commandMessage.message.channel.send(embed);
	} else {
		commandMessage.message.react("❔");
	}
}

