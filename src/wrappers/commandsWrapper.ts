import { ICommand } from "../interfaces/ICommand";

import { evalCommand } from "../commands/evalCommand";
import { debugArgsCommand } from "../commands/debugArgsCommand";
import { pingCommand } from "../commands/pingCommand";

export const commands: Array<ICommand> = [
	evalCommand,
	debugArgsCommand,
	pingCommand
];

