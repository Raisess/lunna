import fetch from "node-fetch";

export default async function amdorenGetService(from: string, to: string, amount?: number): Promise<any> {
	const req: any = await fetch(`https://www.amdoren.com/api/currency.php?api_key=${process.env.AMDOREN_API_KEY}&from=${from}&to=${to}${amount ? `&amount=${amount}` : ""}`);
	const res: any = await req.json();

	return res;
}

