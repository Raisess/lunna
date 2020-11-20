import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import adminCommandOptions from "../adminCommandsOptions.json";

export const evalCommand: ICommand = {
	name:     "=>",
	callback: evalCommandCallback,
	options:  adminCommandOptions["eval"]
};

function evalCommandCallback(commandMessage: ICommandMessage): void {
	const code:   string = commandMessage.args ? commandMessage.args.join(" ") : "";
	const result: string = eval(code);

	commandMessage.message.channel.send(result, { code: "xl" });
}

