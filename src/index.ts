import "dotenv/config";

import { Client } from "discord.js";

import BotCore from "./Core/BotCore";
import { commands } from "./wrappers/commandsWrapper";
import { specialWords } from "./wrappers/specialWordsWrapper";

const bot: BotCore = new BotCore(new Client(), process.env.BOT_PREFIX, process.env.BOT_TOKEN);

for (const command of commands) {
	bot.onCommand(command.name, command.description, command.callback, command.options);
}

for (const specialWord of specialWords) {
	bot.onMessageIncludes(specialWord.words, specialWord.callback);
}

