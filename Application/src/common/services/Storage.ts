import AsyncStorage from '@react-native-async-storage/async-storage';
import { AES, enc } from 'crypto-js';
import { STORAGE_KEY } from 'src/Config';

class Storage {
	private encrypt(value: string): string {
		return AES.encrypt(value, STORAGE_KEY).toString();
	}

	private decrypt(value: string): string {
		return AES.decrypt(value, STORAGE_KEY).toString(enc.Utf8);
	}

	public async set(key: string, value: string) {
		try {
			const encrypted = this.encrypt(value);
			await AsyncStorage.setItem(key, encrypted);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	public setObject(key: string, value: any) {
		try {
			const encrypted = this.encrypt(JSON.stringify(value));
			return this.set(key, encrypted);
		} catch (err) {
			console.error(err);
			return false;
		}
	}

	public async get(key: string) {
		try {
			const value = await AsyncStorage.getItem(key);
			if (!value) {
				return null;
			}
			return this.decrypt(value);
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async getObject(key: string) {
		try {
			const obj = await this.get(key);
			if (!obj) {
				return null;
			}
			const decrypted: string = this.decrypt(obj);
			const result = JSON.parse(decrypted);
			return result;
		} catch (err) {
			console.error(err);
			return null;
		}
	}

	public async remove(key: string) {
		try {
			await AsyncStorage.removeItem(key);
			return true;
		} catch (err) {
			console.error(err);
			return false;
		}
	}
}

export default new Storage();
