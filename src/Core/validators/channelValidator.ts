export default function channelValidate(channel: string, channelArray: Array<string>): boolean {
	if (channelArray && channelArray.length > 0) {
		return channelArray.includes(channel.toLowerCase());
	}

	return false;
}

