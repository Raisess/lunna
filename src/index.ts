import "dotenv/config";

import { Client } from "discord.js";
import https from "https";
import app from "./server";

import BotCore from "./Core/BotCore";
import { commands } from "./wrappers/commandsWrapper";
import { specialWords } from "./wrappers/specialWordsWrapper";

if (process.env.MAINTENANCE === "false") {
	const bot: BotCore = new BotCore(new Client(), process.env.BOT_PREFIX, process.env.BOT_TOKEN);

	for (const command of commands) {
		bot.onCommand(command.name, command.description, command.callback, command.options);
	}

	for (const specialWord of specialWords) {
		bot.onMessageIncludes(specialWord.words, specialWord.callback);
	}

	app.listen(process.env.PORT || 1939);

	// keep server alive
	setInterval(() => {
		if (process.env.SERVER_URL && process.env.SERVER_URL !== "") {
			https.get(process.env.SERVER_URL);
		}
	}, 5 * 60000);
}

