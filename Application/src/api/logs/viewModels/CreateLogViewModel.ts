import { LogLevel } from '../enums/LogLevel';
import { LogType } from '../enums/LogType';

export interface CreateLogViewModel {
	level: LogLevel;
	type: LogType;
	message: string;
	clientVersion: string;
	systemName: string;
	systemVersion: string;
	extraData: string | null;
}
