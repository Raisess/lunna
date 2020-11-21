import { ICommand, ICommandMessage } from "../interfaces/ICommand";

import adminCommandOptions from "../jsonData/adminCommandsOptions.json";

export const evalCommand: ICommand = {
	name:     "=>",
	callback: evalCommandCallback,
	options:  adminCommandOptions["debug"]
};

function evalCommandCallback(commandMessage: ICommandMessage): void {
	const code:   string = commandMessage.args ? commandMessage.args.join(" ") : "";
	
	try {
		const result: string = eval(code);

		commandMessage.message.channel.send(result, { code: "xl" });
	} catch(err) {
		console.error(err.message);

		commandMessage.message.react("⚠️");
	}
}

