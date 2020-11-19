import { ICommand } from "./interfaces/ICommand";

import { evalCommandSignature } from "./commands/evalCommand";

export const commands: Array<ICommand> = [
	evalCommandSignature
];

