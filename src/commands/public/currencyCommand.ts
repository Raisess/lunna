import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import amdorenGetService from "../../services/currencyServices/amdorenGetService";

import ErrorLogger from "../../utils/loggers/ErrorLogger";

export const currencyCommand: ICommand = {
	name:        "currency",
	description: "A currency command ayaya, try lunna currency eur btc",
	callback:    currencyCommandCallback
};

async function currencyCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const args: Array<string> = commandMessage.args || [""];

	const currency: any          = await amdorenGetService(args[0], args[1], parseInt(args[2]));
	const embed:    MessageEmbed = new MessageEmbed();

	embed.setColor("RANDOM");
	embed.setThumbnail("https://www.amdoren.com/favicon.ico");

	if (currency.error === 0) {
		embed.setTitle(`Currency of ${args[0]} to ${args[1]}`);
		embed.addField("Currency:", currency.amount);
	} else {
		embed.setTitle(`Error: ${currency.error}`);
		embed.addField("Message:", currency.error_message);

		new ErrorLogger({
			code:    501,
			message: "Can't fetch currency API.",
			reason:  currency.error_message
		});
	}

	embed.setFooter("Powered by Amdoren");
	embed.setTimestamp();

	commandMessage.message.channel.send(embed);
}

