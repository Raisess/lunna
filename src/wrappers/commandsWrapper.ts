import { ICommand } from "../interfaces/ICommand";

import commandPaths from "../jsonData/commandPaths.json";

export const commands: Array<ICommand> = commandPaths.map((path: string): ICommand => {
	const command: ICommand = require(`../commands/${path}`);

	return {
		name:        Object.values(command)[0].name,
		description: Object.values(command)[0].description,
		callback:    Object.values(command)[0].callback,
		options:     Object.values(command)[0].options
	};
});

