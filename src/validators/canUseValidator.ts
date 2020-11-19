export default function canUseValidate(userId: string, canUseArray: Array<string>): boolean {
	if (canUseArray && canUseArray.length > 0) {
		return canUseArray.includes(userId);
	}

	return false;
}

