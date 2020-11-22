export default function getUserAvatar(user: any): string {
	const avatar: string = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

	return avatar;
}

