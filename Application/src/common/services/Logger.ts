import dayjs from 'dayjs';
import DeviceInfo from 'react-native-device-info';
import { LogLevel } from 'src/api/logs/enums/LogLevel';
import { LogType } from 'src/api/logs/enums/LogType';
import { CreateLogViewModel } from 'src/api/logs/viewModels/CreateLogViewModel';
import {
	DATE_TIME_SECONDS_FORMAT,
	LOGGER_PRINT_TO_CONSOLE,
	LOGGER_PRINT_TO_CONSOLE_LEVEL,
	LOGGER_SEND_TO_SERVER,
	LOGGER_SEND_TO_SERVER_LEVEL,
} from 'src/Config';

class Logger {
	private systemName: string = '';
	private systemVersion: string = '';
	private appVersion: string = '';

	constructor() {
		this.systemName = DeviceInfo.getSystemName();
		this.systemVersion = DeviceInfo.getSystemVersion();
		this.appVersion = DeviceInfo.getVersion();
	}

	public async debug(logType: LogType, message: string, extraData?: any, allowSend = true) {
		return this.log(LogLevel.Debug, logType, message, extraData, allowSend);
	}

	public async info(logType: LogType, message: string, extraData?: any, allowSend = true) {
		return this.log(LogLevel.Information, logType, message, extraData, allowSend);
	}

	public async warn(logType: LogType, message: string, extraData?: any, allowSend = true) {
		return this.log(LogLevel.Warning, logType, message, extraData, allowSend);
	}

	public async error(logType: LogType, message: string, extraData?: any, allowSend = true) {
		return this.log(LogLevel.Error, logType, message, extraData, allowSend);
	}

	public async critical(logType: LogType, message: string, extraData?: any, allowSend = true) {
		return this.log(LogLevel.Critical, logType, message, extraData, allowSend);
	}

	private async log(level: LogLevel, type: LogType, message: string, extraData?: any, allowSend = true) {
		const data: CreateLogViewModel = {
			level,
			type,
			message,
			systemName: this.systemName,
			systemVersion: this.systemVersion,
			clientVersion: this.appVersion,
			extraData,
		};

		if (LOGGER_PRINT_TO_CONSOLE && level >= LOGGER_PRINT_TO_CONSOLE_LEVEL) {
			const date = dayjs.utc(new Date()).format(DATE_TIME_SECONDS_FORMAT);
			const logMessage = `[${date}] ${message}: ${extraData && extraData.message ? extraData.message : ''}`;
			const defaultStyle = 'border-radius: 6px; padding: 2px 4px;';

			switch (level) {
				case LogLevel.Information:
					console.log(`%c${logMessage}`, `${defaultStyle} color: green;`, data);
					break;
				case LogLevel.Error:
					console.log(`%c${logMessage}`, `${defaultStyle} color: red;`, data);
					break;
				default:
					console.log(logMessage, data);
					break;
			}
		}

		if (allowSend && LOGGER_SEND_TO_SERVER && level >= LOGGER_SEND_TO_SERVER_LEVEL) {
			// try {
			// 	await LogsService.create(data);
			// } catch (error) {
			// 	// We can't log a log can we?
			// }
		}
	}
}

export default new Logger();
