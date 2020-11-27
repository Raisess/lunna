import fetch from "node-fetch";

export default async function tenorGetService(search: string): Promise<string> {
	const req: any = await fetch(`https://api.tenor.com/v1/search?q=${search.replace(/\s+/g, "+")}&lmt=10&key=${process.env.TENOR_API_KEY}`);

	const gifs:      any = await req.json();
	const randomGif: any = await gifs.results[Math.round(Math.random() * (gifs.results.length - 1))];

	return randomGif.media[0].mediumgif.url;
}

