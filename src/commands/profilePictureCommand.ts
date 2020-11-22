import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import getUserAvatar from "../modules/getUserAvatar";

export const profilPictureCommand: ICommand = {
	name:        "pfp",
	description: "Get a user profile picture",
	callback:    profilPictureCommandCallback
};

function profilPictureCommandCallback(commandMessage: ICommandMessage): void {
	const user:   any    = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	const avatar: string = getUserAvatar(user);
	
	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setAuthor(`${user.username} profile picture:`);
	embed.setImage(avatar);
	embed.setDescription(`[Image Link](${avatar})`);

	commandMessage.message.channel.send(embed);
}

