import { IErrorLoggerParams } from "../../interfaces/IErrorLogger";

export default class ErrorLogger {
	private code:     number;
	private message:  string;
	private reason?:  string;

	private timestamp: string = new Date().toLocaleString();

	constructor(params: IErrorLoggerParams) {
		const { code, message, reason } = params;

		this.code    = code;
		this.message = message;
		this.reason  = reason;

		if (process.env.ERROR_LOG === "true") this.log();
	}

	private log(): void {
		console.error("\n");
		console.error("Oops... An error ocurred!");
		console.error("-----> Error:", this.code);
		console.error("-----> Message:", this.message);
		this.reason ? console.error("-----> Reason:", this.reason) : null;
		console.error("-----> Timestamp:", this.timestamp);
		console.error("\n");
	}
}

