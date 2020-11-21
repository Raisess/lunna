import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import { MessageEmbed } from "discord.js";

export const profilPictureCommand: ICommand = {
	name:     "pfp",
	callback: profilPictureCommandCallback
};

function profilPictureCommandCallback(commandMessage: ICommandMessage): void {
	const user:   any    = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	const avatar: string = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setAuthor(`${user.username} profile picture:`);
	embed.setImage(avatar);
	embed.setDescription(`[Image Link](${avatar})`);

	commandMessage.message.channel.send(embed);
}

