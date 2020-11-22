import { ICommand } from "../interfaces/ICommand";

// bot admin
import { evalCommand } from "../commands/evalCommand";
import { debugArgsCommand } from "../commands/debugArgsCommand";
import { execCommand } from "../commands/execCommand";
// server admin
import { kickCommand, banCommand } from "../commands/kickBanCommand";
// all
import { pingCommand } from "../commands/pingCommand";
import { profilPictureCommand } from "../commands/profilePictureCommand";
import { imageCommand } from "../commands/imageCommand";
import { hugCommand } from "../commands/hugCommand";
import { helpCommand } from "../commands/helpCommand";
import { gifCommand } from "../commands/gifCommand";
// NSFW
import { hentaiCommand } from "../commands/hentaiCommand";
import { ppCommand } from "../commands/ppCommand";

export const commands: Array<ICommand> = [
	// bot admin
	evalCommand,
	debugArgsCommand,
	execCommand,
	// server admin
	kickCommand,
	banCommand,
	// all
	pingCommand,
	profilPictureCommand,
	imageCommand,
	hugCommand,
	helpCommand,
	gifCommand,
	// NSFW
	hentaiCommand,
	ppCommand
];

