import "dotenv/config";

import BotCore from "./BotCore";
import { commands } from "./commandsWrapper";
import { specialWords } from "./specialWordsWrapper";

const bot: BotCore = new BotCore(process.env.BOT_PREFIX, process.env.BOT_TOKEN);

for (const command of commands) {
	bot.onCommand(command.name, command.callback, command.options);
}

for (const specialWord of specialWords) {
	bot.onMessageIncludes(specialWord.words, specialWord.callback);
}

