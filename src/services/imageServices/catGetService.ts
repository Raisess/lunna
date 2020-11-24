import fetch from "node-fetch";

export default async function catGetService(): Promise<string> {
	const req: any = await fetch("https://aws.random.cat/meow");
	const res: any = await req.json();

	return res.file;
}

