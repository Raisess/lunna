import { ICommandCallback } from "./interfaces/ICommand";

import evalCommand from "./commands/eval";

export const commands: Array<[string, ICommandCallback]> = [
	["=>", evalCommand]
];

