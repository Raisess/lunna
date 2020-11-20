import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";

export const profilPictureCommand: ICommand = {
	name:     "pfp",
	callback: profilPictureCommandCallback
};

function profilPictureCommandCallback(commandMessage: ICommandMessage): void {
	const user: any = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	
	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setAuthor(`${user.username} profile picture:`);
	embed.setImage(user.avatarURL());

	commandMessage.message.channel.send(embed);
}

