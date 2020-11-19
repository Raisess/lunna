import "dotenv/config";

import BotCore from "./BotCore";
import { commands } from "./commandsWrapper";

const bot: BotCore = new BotCore(process.env.BOT_PREFIX, process.env.BOT_TOKEN);

for (const command of commands) {
	bot.onCommand(command.name, command.callback, command.options);
}

