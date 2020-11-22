import { ICommand, ICommandMessage } from "../interfaces/ICommand";

export const kickCommand: ICommand = {
	name:        "kick",
	description: "Kick a user from server.",
	callback:    kickCommandCallback
};

export const banCommand: ICommand = {
	name:        "ban",
	description: "Ban a user from server.",
	callback:    banCommandCallback
};

function kickCommandCallback(commandMessage: ICommandMessage): void {
	if (commandMessage.message.member.hasPermission("KICK_MEMBERS")) {
		const user: any = commandMessage.message.mentions.users.first();

		user.kick();

		commandMessage.message.channel.send(`${user.username}'s has been kicked ayaya.`);
	} else {
		commandMessage.message.react("🚫");
		commandMessage.message.reply("stop trying to kick people, u not a football player bud!");
	}
}

function banCommandCallback(commandMessage: ICommandMessage): void {
	if (commandMessage.message.member.hasPermission("BAN_MEMBERS")) {
		const user: any = commandMessage.message.mentions.users.first();

		user.ban();

		commandMessage.message.channel.send(`${user.username}'s has been banned... bye bye.`);
	} else {
		commandMessage.message.react("🚫");
		commandMessage.message.reply("u don't have that power muahaha!");
	}
}

