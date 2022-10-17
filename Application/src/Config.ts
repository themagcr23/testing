import Config from 'react-native-config';
import { LogLevel } from './api/logs/enums/LogLevel';

/**
 * App
 */
export const APP_ENV = Config.ENV;

/**
 * API
 */
export const API_BASE_URL = Config.API_BASE_URL;
export const SERVER_BASE_URL = Config.SERVER_BASE_URL;

/**
 * Languages
 */
export const LANGUAGES = ['pt'];
export const DEFAULT_LANGUAGE = 'pt';
export const DEFAULTNS: string = 'translations';

/**
 * Logger
 */
const getLoggerLogLevel = (logLevelStr: string | undefined) => {
	if (!logLevelStr || !Object.keys(LogLevel).includes(logLevelStr)) {
		return null;
	}
	return LogLevel[logLevelStr as keyof typeof LogLevel];
};

export const LOGGER_PRINT_TO_CONSOLE =
	Config.LOGGER_PRINT_TO_CONSOLE !== undefined ? Config.LOGGER_PRINT_TO_CONSOLE : true;
export const LOGGER_PRINT_TO_CONSOLE_LEVEL =
	getLoggerLogLevel(Config.LOGGER_PRINT_TO_CONSOLE_LEVEL) || LogLevel.Information;
export const LOGGER_SEND_TO_SERVER = Config.LOGGER_SEND_TO_SERVER !== undefined ? Config.LOGGER_SEND_TO_SERVER : false;
export const LOGGER_SEND_TO_SERVER_LEVEL = getLoggerLogLevel(Config.LOGGER_SEND_TO_SERVER_LEVEL) || LogLevel.Error;

/**
 * UI
 */
export const DROPDOWN_CLOSE_INTERVAL = 4000;

/**
 * Dates
 */
export const DATE_FORMAT = 'DD MMMM YYYY';
export const DATE_TIME_FORMAT_INPUT = 'DD/MM/YYYY HH:mm';
export const DATE_TIME_FORMAT = 'DD/MM/YYYY | HH:mm';
export const DATE_FORMAT_WIDTH_DAY = 'dddd DD MMMM';
export const DATE_TIME_SECONDS_FORMAT = 'DD/MM/YYYY HH:mm:ss';
export const DATE_FORMAT_DEFAUT = 'DD/MM/YYYY';
export const DATE_YEAR_MONTH_FORMAT = 'MM/YYYY';
export const TIME_FORMAT = 'HH:mm';
export const DATE_FORMAT_MONTH_YEAR = 'MM/YYYY';

/**
 * Storage
 */
export const STORAGE_KEY = 'cQfTjWnZr4u7x!A%D*G-KaNdRgUkXp2s';
export const STORAGE = {
	CURRENT_LOCALE: 'CURRENT_LOCALE',
	AUTH_USER_TOKEN: 'AUTH_USER_TOKEN',
	AUTH_USER_PROFILE: 'AUTH_USER_PROFILE',
};

/**
 * Pagination
 */
export const DEFAULT_PAGINATION_ITEMS_PER_PAGE = 10;

/**
 * Search
 */
export const DEFAULT_SEARCH_DEBOUNCE = 500;

/**
 * DECIMAL PLACES
 */
export const DEFAULT_DECIMAL_PLACES = 2;
