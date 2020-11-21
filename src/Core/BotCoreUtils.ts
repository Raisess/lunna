import { Client } from "discord.js";

export default class BotCoreUtils {
	private client_: Client;

	constructor(client: Client) {
		this.client_ = client;
	}

	// set a activity to bot
	public setActivity(game: string, type: string = "PLAYING"): void {
		this.client_.user.setActivity(game, { type });
	}

	public async getGuildsSize(): Promise<number> {
		// @ts-ignore
		const guildsSize: number = await this.client_.guilds.cache.size;

		return guildsSize;
	}

	public async getUsersSize(): Promise<number> {
		// @ts-ignore
		const usersSize: number = await this.client_.users.cache.size;

		return usersSize;
	}
}

