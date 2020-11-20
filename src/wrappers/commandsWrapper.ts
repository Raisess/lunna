import { ICommand } from "../interfaces/ICommand";

import { evalCommand } from "../commands/evalCommand";
import { pingCommand } from "../commands/pingCommand";

export const commands: Array<ICommand> = [
	evalCommand,
	pingCommand
];

