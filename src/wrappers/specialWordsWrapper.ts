import { ISpecialWord } from "../interfaces/ISpecialWord";

import specialWordsJson from "../jsonData/specialWords.json";

export const specialWords: Array<ISpecialWord> = specialWordsJson.map((json: any) => {
	return {
		words: json.words,
		callback: (message: any): void => {
			if (json.reactWith)   message.react(json.reactWith);
			if (json.respondWith) message.channel.send(json.respondWith);
		}
	}
});

