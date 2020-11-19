import { ICommand } from "../interfaces/ICommand";

export const evalCommandSignature: ICommand = {
	name:     "=>",
	callback: evalCommand,
	options:  { canUse: ["456557054237212682"] }
};

function evalCommand(message: any, args?: Array<string>): void {
	const code:   string = args ? args.join(" ") : "";
	const result: any    = eval(code);

	message.channel.send(result, { code: "xl" });
}

