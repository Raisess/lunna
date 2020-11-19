import { ICommandCallback, ICommandOptions } from "./interfaces/ICommand";

import evalCommand from "./commands/eval";

export const commands: Array<[string, ICommandCallback, ICommandOptions]> = [
	["=>", evalCommand, { canUse: ["456557054237212682"] }]
];

