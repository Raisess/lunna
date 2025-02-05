import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import adminCommandOptions from "../../jsonData/adminCommandsOptions.json";

import { exec } from "child_process";

export const execCommand: ICommand = {
	name:        "$",
	description: "child_process exec",
	callback:    execCommandCallback,
	options:     adminCommandOptions["debug"]
};

function execCommandCallback(commandMessage: ICommandMessage): void {
	const toExec: string = commandMessage.args ? commandMessage.args.join(" ") : "";

	if (toExec !== "") {
		exec(toExec, (err: any, stdout: string, stderr: string) => {
			if (err) {
				commandMessage.message.react("⚠️");
				return;
			}

			if (stdout) commandMessage.message.channel.send(stdout, { code: "shell" });
			if (stderr) commandMessage.message.channel.send(stderr, { code: "shell" });
		});
	} else {
		commandMessage.message.react("⚠️");
	}
}

