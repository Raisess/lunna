import { ICommand, ICommandMessage } from "../../interfaces/ICommand";

import { MessageEmbed } from "discord.js";
import openWeatherGetService from "../../services/weatherServices/openWeatherGetService";

export const weatherCommand: ICommand = {
	name:        "weather",
	description: "Get location weather data",
	callback:    weatherCommandCallback
};

interface ILocation {
	cityName:    string;
	stateCode:   string;
	countryCode: string;
}

async function weatherCommandCallback(commandMessage: ICommandMessage): Promise<void> {
	const args: Array<string> = commandMessage.args ? commandMessage.args.join(" ").split(",") : [];

	const location: ILocation = {
		cityName:    encodeURI(args[0]),
		stateCode:   args[1],
		countryCode: args[2]
	};

	try {
		const weatherData: any = await openWeatherGetService(location.cityName, location.stateCode, location.countryCode);
	
		const embed: MessageEmbed = new MessageEmbed();

		embed.setColor("RANDOM");
		embed.setTitle(`🌤️  ${weatherData.name}:`);
		embed.setDescription(weatherData.weather[0].description);
		embed.addField("🌡️ Temp:", `${convertToFar(weatherData.main.temp)}ºF | ${convertToCelsius(weatherData.main.temp)}ºC`, true);
		embed.addField("🌡️ Feels:", `${convertToFar(weatherData.main.feels_like)}ºF | ${convertToCelsius(weatherData.main.feels_like)}ºC`, true);
		embed.addField("💧 Humidity:", `${weatherData.main.humidity}%`, true);
		embed.addField("☁️ Clouds:", `${weatherData.clouds.all}%`, true);
		embed.addField("👀 Visibility:", `${weatherData.visibility / 100}%`, true);
		embed.addField("🍃 Winds:", `${Math.round(weatherData.wind.speed)} m/s`, true);
		embed.setFooter(`Lon: ${weatherData.coord.lon} Lat: ${weatherData.coord.lat}`);
		embed.setTimestamp();

		commandMessage.message.channel.send(embed);
	} catch(e) {
		commandMessage.message.react("❔");
	}
}

function convertToFar(temp: number): number {
	return Math.round((temp - 273.15) * 1.8 + 32);
}

function convertToCelsius(temp: number): number {
	temp = convertToFar(temp);

	return Math.round((temp - 32) / 1.8);
}

