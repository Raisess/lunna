import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import adminCommandOptions from "../../jsonData/adminCommandsOptions.json";

export const debugArgsCommand: ICommand = {
	name:        "da",
	description: "Debug command message arguments",
	callback:    debugArgsCommandCallback,
	options:     adminCommandOptions["debug"]
};

function debugArgsCommandCallback(commandMessage: ICommandMessage): void {
	const args: Array<string> = commandMessage.args ? commandMessage.args : [];

	commandMessage.message.channel.send(JSON.stringify(args), { code: "json" });
}

