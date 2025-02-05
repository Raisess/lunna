import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import getUserAvatar from "../../modules/userModules/getUserAvatar";

export const ppCommand: ICommand = {
	name:        "pp",
	description: "Generate user pp info yayay.",
	callback:    ppCommandCallback,
	options:     { nsfw: true }
};

interface IPP {
	size: number;
	draw: (ppSize: number) => string;
}

function ppCommandCallback(commandMessage: ICommandMessage, client: any): void {
	const user:    any     = commandMessage.message.mentions.users.first() || commandMessage.message.author;
	const avatar:  string  = getUserAvatar(user);
	const isLunna: boolean = user.id === client.user.id;

	const pp: IPP = {
		size: !isLunna ? Math.round(Math.random() * 30) : 30,
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
	embed.setFooter(`${pp.size > 14 ? (isLunna ? "I have the biggest pp in the world bud haha." : "U have a big pp bro.") : "Oh dear smol pp, but don't worry its kinda cute."}`);

	commandMessage.message.channel.send(embed);
}

