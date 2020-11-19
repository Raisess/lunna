import { ICommand } from "./interfaces/ICommand";

import { evalCommand } from "./commands/evalCommand";

export const commands: Array<ICommand> = [
	evalCommand
];

