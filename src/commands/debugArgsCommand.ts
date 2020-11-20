import { ICommand, ICommandMessage } from "../interfaces/ICommand";

export const debugArgsCommand: ICommand = {
	name:     "da",
	callback: debugArgsCommandCallback,
	options:  { canUse: ["456557054237212682"] }
}

function debugArgsCommandCallback(commandMessage: ICommandMessage): void {
	const args: Array<string> = commandMessage.args ? commandMessage.args : [];

	commandMessage.message.channel.send(JSON.stringify(args), { code: "json" });
}

