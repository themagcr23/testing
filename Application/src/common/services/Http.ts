import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as qs from 'qs';
import { DEFAULT_LANGUAGE, API_BASE_URL } from '../../Config';
import Logger from './Logger';
import { LogType } from 'src/api/logs/enums/LogType';

const axiosConfig: AxiosRequestConfig = {
	responseType: 'json',
};

const http = axios.create(axiosConfig);

class Http {
	private language: string = DEFAULT_LANGUAGE;

	constructor() {
		this.initInterceptors();
	}

	private initInterceptors() {
		// Request
		http.interceptors.request.use(
			async (config: AxiosRequestConfig) => {
				config.baseURL = API_BASE_URL;
				config.headers = await this.getHeaders();
				return config;
			},
			(error: AxiosError) => error,
		);

		// Response
		http.interceptors.response.use(
			async (response: AxiosResponse): Promise<any> => {
				return response.data;
			},
			async (error: AxiosError) => {
				return Promise.reject(error);
			},
		);
	}

	public setLanguage(language: string) {
		if (language) {
			this.language = language;
		}
	}

	public async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
		return http.post<any, T>(url, data, config).catch((error: any) => this.onError(error, url));
	}

	public async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
		return http.put<any, T>(url, data, config).catch((error: any) => this.onError(error, url));
	}

	public async get<T>(url: string, params: any = null): Promise<T> {
		if (params) {
			url = `${url}?${qs.stringify(params)}`;
		}
		return http.get<any, T>(url).catch((error: any) => this.onError(error, url));
	}

	private getHeaders = async () => {
		return {
			Accept: 'application/json, text/plain, */*',
			'Content-Type': 'application/json; charset=utf-8',
			'X-App-Lang': this.language,
		};
	};

	private onError(error: any, url: string) {
		Logger.error(LogType.REQUEST, error.message, { url, error }, false);
		return Promise.reject(error);
	}
}

export default new Http();
