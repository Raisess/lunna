import { ICommand } from "../interfaces/ICommand";

// bot admin
import { evalCommand } from "../commands/evalCommand";
import { debugArgsCommand } from "../commands/debugArgsCommand";
import { execCommand } from "../commands/execCommand";
// all
import { pingCommand } from "../commands/pingCommand";
import { profilPictureCommand } from "../commands/profilePictureCommand";
import { imageCommand } from "../commands/imageCommand";
import { hugCommand } from "../commands/hugCommand";
import { helpCommand } from "../commands/helpCommand";
// NSFW
import { hentaiCommand } from "../commands/hentaiCommand";

export const commands: Array<ICommand> = [
	// bot admin
	evalCommand,
	debugArgsCommand,
	execCommand,
	// all
	pingCommand,
	profilPictureCommand,
	imageCommand,
	hugCommand,
	helpCommand,
	// NSFW
	hentaiCommand
];

