import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import hanimeGetService from "../services/imageServices/hanimeGetService";

export const hentaiCommand: ICommand = {
	name:        "hentai",
	description: "A NSFW hentai command, u can use only on nsfw channel.",
	callback:    hentaiCommandCallback,
	options:     { channel: ["nsfw"] }
};

async function hentaiCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const image: string = await hanimeGetService();

	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setTitle("NSFW Hentai:");
	embed.setImage(image);

	commandMessage.message.channel.send(embed);
}

