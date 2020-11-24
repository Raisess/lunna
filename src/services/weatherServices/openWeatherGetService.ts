import fetch from "node-fetch";

export default async function openWeatherGetService(city: string, stateCode: string = "", countryCode: string = ""): Promise<any> {
	const req: any = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&appid=${process.env.OPEN_WEATHER_API_KEY}`);
	const res: any = await req.json();

	return res;
}

