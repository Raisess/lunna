import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import apodNasaGetService from "../../services/imageServices/apodNasaGetService";

import ErrorLogger from "../../utils/loggers/ErrorLogger";

export const apodCommand: ICommand = {
	name:        "apod",
	description: "Get APOD NASA API data from a specific date.",
	callback:     apodCommandCallback
};

async function apodCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	try { 
		const args: string = commandMessage.args?.join(" ") || "";
		const apod: any    = await apodNasaGetService(args);

		const embed: MessageEmbed = new MessageEmbed();

		embed.setColor("RANDOM");
		embed.setTitle(apod.title);
		embed.addField("Date:", apod.date);
		embed.setImage(apod.hdurl);
		embed.setDescription(apod.explanation);
		embed.setFooter("Powered by NASA");
		embed.setTimestamp();

		commandMessage.message.channel.send(embed);
	} catch(err) {
		new ErrorLogger({
			code:    501,
			message: "Fetch fail.",
			reason:  err.message
		});

		commandMessage.message.react("⚠️");
	}
}

