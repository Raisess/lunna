import fetch from "node-fetch";

export default async function hanimeGetService(): Promise<string> {
	const imagesUrl: Array<[string, string]> = [];

	function baseUrl(value: number): [string, string] {
		return [
			`https://i1.wp.com/dynamic-assets.imageg.top/uploads/1132000/1132${value}.png?quality=99&h=250`,
			`https://i1.wp.com/dynamic-assets.imageg.top/uploads/1132000/1132${value}.jpg?quality=99&h=250`
		];
	}

	for (let i: number = 311; i < 412; i++) {
		imagesUrl.push(baseUrl(i));
	}

	const selectedImages: [string, string] = imagesUrl[Math.round(Math.random() * (imagesUrl.length - 1))];

	const testImage: any = await fetch(selectedImages[0]);
	const testResponse: any = await testImage.text();

	if (testResponse !== "We cannot complete this request, remote server returned an unexpected status code (400)" && 
		 testResponse !== "We cannot complete this request, remote data could not be fetched") {
		return selectedImages[0];
	} else {
		return selectedImages[1];
	}
}

