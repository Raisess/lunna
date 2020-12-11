import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { commands } from "../../wrappers/commandsWrapper";

export const helpCommand: ICommand = {
	name:        "help",
	description: "Lunna bot help",
	callback:    helpCommandCallback
};

function helpCommandCallback(commandMessage: ICommandMessage): void {
	commandMessage.message.channel.send("😜 | Lunna BOT help:\n");

	commandMessage.message.channel.send("-------------------------------------------------");
	
	for (const command of commands) {
		commandMessage.message.channel.send(`**command**: ${command.name}\n**description**: ${command.description}`);
	}

	commandMessage.message.channel.send("-------------------------------------------------");
	commandMessage.message.channel.send(`Total commands: ${commands.length}`);
}

