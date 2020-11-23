import "dotenv/config";

import { Client } from "discord.js";

import BotCore from "./Core/BotCore";
import { commands } from "./wrappers/commandsWrapper";
import { specialWords } from "./wrappers/specialWordsWrapper";

import http from "http";
import SmolHttp from "./libraries/smol-http/src/SmolHttp";

// bot
const bot: BotCore = new BotCore(new Client(), process.env.BOT_PREFIX, process.env.BOT_TOKEN);

for (const command of commands) {
	bot.onCommand(command.name, command.description, command.callback, command.options);
}

for (const specialWord of specialWords) {
	bot.onMessageIncludes(specialWord.words, specialWord.callback);
}

// server
const server: SmolHttp = new SmolHttp(parseInt(process.env.PORT || "1939"));

server.get("/", () => "");

// keep server alive
setInterval(() => {
	http.get(process.env.SERVER_URL ? `https://${process.env.SERVER_URL}` : "http://localhost:1939");
}, 5 * 60000);

