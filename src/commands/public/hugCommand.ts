import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import pixabayGetService from "../../services/imageServices/pixabayGetService";

export const hugCommand: ICommand = {
	name:        "hug",
	description: "Lunna hug's a user",
	callback:    hugCommandCallback
};

async function hugCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const user: any = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	
	const image: string | undefined = await pixabayGetService("hug");

	if (image) {
		const embed: MessageEmbed = new MessageEmbed();

		embed.setColor("#dd2e44");
		embed.setTitle(`Lunna hugged ${user.username} ❤️ ❤️ ❤️`);
		embed.setImage(image);

		commandMessage.message.channel.send(embed);
	} else {
		commandMessage.message.react("❔");
	}
}

