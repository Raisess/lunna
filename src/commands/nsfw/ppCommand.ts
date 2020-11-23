import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import getUserAvatar from "../../modules/userModules/getUserAvatar";

export const ppCommand: ICommand = {
	name:        "pp",
	description: "Generate user pp info yayay.",
	callback:    ppCommandCallback
};

interface IPP {
	size: number;
	draw: (ppSize: number) => string;
}

function ppCommandCallback(commandMessage: ICommandMessage): void {
	const user:   any    = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	const avatar: string = getUserAvatar(user);

	const pp: IPP = {
		size: Math.round(Math.random() * 30),
		draw: (ppSize: number): string => {
			let draw: string = "";

			for (let i: number = 0; i < ppSize; i++) {
				draw += "=";
			}

			return draw;
		}
	};

	const embed: MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setThumbnail(avatar);
	embed.setTitle(`${user.username}'s pp info:`);
	embed.addField("PP size:", `${pp.size}cm`);
	embed.addField("PP representation:", `8${pp.draw(pp.size)}D`);
	embed.setFooter(`${pp.size > 10 ? "U have a big pp bro." : "Oh dear smol pp, but don't worry its kinda cute."}`);

	commandMessage.message.channel.send(embed);
}

