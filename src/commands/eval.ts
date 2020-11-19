export default function evalCommand(message: any, args?: Array<string>): void {
	const code:   string = args ? args.join(" ") : "";
	const result: any    = eval(code);

	message.channel.send(result, { code: "xl" });
}

