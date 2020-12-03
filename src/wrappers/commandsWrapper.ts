import { ICommand } from "../interfaces/ICommand";

import commandPaths from "../jsonData/commandPaths.json";

export let commands: Array<ICommand> = [];

commandPaths.map((path: string) => {
	const command: ICommand = require(`../commands/${path}`);

	commands.push({
		name:        Object.values(command)[0].name,
		description: Object.values(command)[0].description,
		callback:    Object.values(command)[0].callback,
		options:     Object.values(command)[0].options
	});

	return command;
});

