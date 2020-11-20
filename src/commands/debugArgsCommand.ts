import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import adminCommandOptions from "../adminCommandsOptions.json";

export const debugArgsCommand: ICommand = {
	name:     "da",
	callback: debugArgsCommandCallback,
	options:  adminCommandOptions["debugArgs"]
}

function debugArgsCommandCallback(commandMessage: ICommandMessage): void {
	const args: Array<string> = commandMessage.args ? commandMessage.args : [];

	commandMessage.message.channel.send(JSON.stringify(args), { code: "json" });
}

