import { ICommand, ICommandMessage } from "../interfaces/ICommand";

export const evalCommand: ICommand = {
	name:     "=>",
	callback: evalCommandCallback,
	options:  { canUse: ["456557054237212682"] }
};

function evalCommandCallback(commandMessage: ICommandMessage): void {
	const code:   string = commandMessage.args ? commandMessage.args.join(" ") : "";
	const result: any    = eval(code);

	commandMessage.message.channel.send(result, { code: "xl" });
}

