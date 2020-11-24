import { ICommand } from "../interfaces/ICommand";

// bot admin
import { pingCommand } from "../commands/botAdmin/pingCommand";
import { evalCommand } from "../commands/botAdmin/evalCommand";
import { debugArgsCommand } from "../commands/botAdmin/debugArgsCommand";
import { execCommand } from "../commands/botAdmin/execCommand";
// server admin
import { kickCommand, banCommand } from "../commands/serverAdmin/kickBanCommand";
// public
import { profilPictureCommand } from "../commands/public/profilePictureCommand";
import { imageCommand } from "../commands/public/imageCommand";
import { hugCommand } from "../commands/public/hugCommand";
import { helpCommand } from "../commands/public/helpCommand";
import { gifCommand } from "../commands/public/gifCommand";
import { catCommand } from "../commands/public/catCommand";
import { weatherCommand } from "../commands/public/weatherCommand";
// NSFW
import { hentaiCommand } from "../commands/nsfw/hentaiCommand";
import { ppCommand } from "../commands/nsfw/ppCommand";

export const commands: Array<ICommand> = [
	// bot admin
	pingCommand,
	evalCommand,
	debugArgsCommand,
	execCommand,
	// server admin
	kickCommand,
	banCommand,
	// all
	profilPictureCommand,
	imageCommand,
	hugCommand,
	helpCommand,
	gifCommand,
	catCommand,
	weatherCommand,
	// NSFW
	hentaiCommand,
	ppCommand
];

