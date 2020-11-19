import { ICommand } from "./interfaces/ICommand";

import evalCommand from "./commands/eval";

export const commands: Array<ICommand> = [
	{
		name:     "=>",
		callback: evalCommand,
		options:  { canUse: ["456557054237212682"] }
	}
];

