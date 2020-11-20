import { ICommand } from "../interfaces/ICommand";

// admin
import { evalCommand } from "../commands/evalCommand";
import { debugArgsCommand } from "../commands/debugArgsCommand";
import { execCommand } from "../commands/execCommand";
// all
import { pingCommand } from "../commands/pingCommand";
import { profilPictureCommand } from "../commands/profilePictureCommand";
import { imageCommand } from "../commands/imageCommand";

export const commands: Array<ICommand> = [
	evalCommand,
	debugArgsCommand,
	execCommand,
	pingCommand,
	profilPictureCommand,
	imageCommand
];

