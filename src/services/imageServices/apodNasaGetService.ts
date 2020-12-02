import fetch from "node-fetch";

export default async function apodNasaGetService(date: string): Promise<any> {
	const req: any = await fetch(`https://api.nasa.gov/planetary/apod?date=${date.replace(/\s+/g, "-")}&api_key=${process.env.NASA_API_KEY}`);
	const res: any = await req.json();

	return res;
}

