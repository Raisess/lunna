import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

export const banCommand: ICommand = {
	name:        "ban",
	description: "Ban a user from server.",
	callback:    banCommandCallback
};

function banCommandCallback(commandMessage: ICommandMessage): void {
	const member: any = commandMessage.member();

	if (member.hasPermission("BAN_MEMBERS")) {
		const user: any = commandMessage.message.mentions.users.first();

		user.ban();

		commandMessage.message.channel.send(`${user.username}'s has been banned... bye bye.`);
	} else {
		commandMessage.message.react("🚫");
		commandMessage.message.reply("u don't have that power muahaha!");
	}
}

