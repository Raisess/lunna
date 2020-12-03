import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

export const kickCommand: ICommand = {
	name:        "kick",
	description: "Kick a user from server.",
	callback:    kickCommandCallback
};

function kickCommandCallback(commandMessage: ICommandMessage): void {
	const member: any = commandMessage.member();

	if (member.hasPermission("KICK_MEMBERS")) {
		const user: any = commandMessage.message.mentions.users.first();

		user.kick();

		commandMessage.message.channel.send(`${user.username}'s has been kicked ayaya.`);
	} else {
		commandMessage.message.react("🚫");
		commandMessage.message.reply("stop trying to kick people, u not a football player bud!");
	}
}

