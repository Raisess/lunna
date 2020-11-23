import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { commands } from "../../wrappers/commandsWrapper";

export const helpCommand: ICommand = {
	name:        "help",
	description: "Lunna bot help",
	callback:    helpCommandCallback
};

function helpCommandCallback(commandMessage: ICommandMessage): void {
	let generateMessage: Array<string> = [];

	commandMessage.message.channel.send("😜 | Lunna BOT help:\n");

	generateMessage.push("-------------------------------------------------");
	
	for (const command of commands) {
		generateMessage.push(`**command**: ${command.name}\n**description**: ${command.description}`);
		generateMessage.push("-------------------------------------------------");
	}

	commandMessage.message.channel.send(generateMessage.join("\n"));
	commandMessage.message.channel.send(`Total commands: ${commands.length}`);
}

