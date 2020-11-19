import { ICommand } from "../interfaces/ICommand";

export const evalCommand: ICommand = {
	name:     "=>",
	callback: evalCommandCallback,
	options:  { canUse: ["456557054237212682"] }
};

function evalCommandCallback(message: any, args?: Array<string>): void {
	const code:   string = args ? args.join(" ") : "";
	const result: any    = eval(code);

	message.channel.send(result, { code: "xl" });
}

