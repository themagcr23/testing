import DropdownAlert from 'react-native-dropdownalert';

type AlertType = 'info' | 'warn' | 'error' | 'success' | 'custom';

export class Alert {
	public static dropDown: DropdownAlert;
	public static isOpen: boolean;

	public static setDropDown(dropDown: DropdownAlert | null) {
		if (dropDown) {
			this.dropDown = dropDown;
		}
	}

	public static alert(
		type: AlertType,
		title: string,
		message: string | string[],
		interval: number,
		payload?: object,
	) {
		if (!this.dropDown) {
			console.warn('no dropdown ref');
			return;
		}

		if (this.isOpen) {
			return;
		}

		this.isOpen = true;

		const finalMessage = Array.isArray(message) ? message.join('\n') : message;

		this.dropDown.alertWithType(type, title, finalMessage, payload, interval);

		setTimeout(() => {
			this.isOpen = false;
		}, interval);
	}

	public static warn(title: string, message: string | string[], interval: number = 3000) {
		Alert.alert('warn', title, message, interval);
	}

	public static error(title: string, message: string | string[], interval: number = 3000) {
		Alert.alert('error', title, message, interval);
	}

	public static info(title: string, message: string | string[], interval: number = 3000) {
		Alert.alert('info', title, message, interval);
	}

	public static success(title: string, message: string | string[], interval: number = 2000) {
		Alert.alert('success', title, message, interval);
	}
}
