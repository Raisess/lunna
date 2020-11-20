import fetch from "node-fetch";

export default async function pixabayGetService(search: string): Promise<string | undefined> {
	const apiKey: string = process.env.PIXABAY_API_KEY ? process.env.PIXABAY_API_KEY : "";

	const request:  any = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${search.replace(/\+s/g, "+")}`);
	const response: any = await request.json();

	const allImages: Array<any> = await response.hits;
	const randomImg: any        = await allImages[Math.round(Math.random() * allImages.length - 1)];

	if (randomImg) return randomImg.webformatURL;

	return undefined;
}

