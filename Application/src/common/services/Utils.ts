import { isTablet } from 'react-native-device-info';
import ImageSize from 'react-native-image-size';
import Orientation, { OrientationType } from 'react-native-orientation-locker';
import Moment from 'moment';
import 'moment/min/locales'; // Import all moment-locales -- it's just 400kb
import { ScreenOrientation } from '../types/Types';
import { DATE_FORMAT_DEFAUT, DEFAULT_LANGUAGE, POLICIES } from 'src/Config';
import numbro from 'numbro';

const removeHash = (hex: string) => (hex.charAt(0) === '#' ? hex.slice(1) : hex);

type RgbType = {
	r: any;
	g: any;
	b: any;
	a: any;
};

const parseHex = (nakedHex: string): RgbType => {
	const isShort = nakedHex.length === 3 || nakedHex.length === 4;

	const twoDigitHexR = isShort ? `${nakedHex.slice(0, 1)}${nakedHex.slice(0, 1)}` : nakedHex.slice(0, 2);
	const twoDigitHexG = isShort ? `${nakedHex.slice(1, 2)}${nakedHex.slice(1, 2)}` : nakedHex.slice(2, 4);
	const twoDigitHexB = isShort ? `${nakedHex.slice(2, 3)}${nakedHex.slice(2, 3)}` : nakedHex.slice(4, 6);
	const twoDigitHexA = (isShort ? `${nakedHex.slice(3, 4)}${nakedHex.slice(3, 4)}` : nakedHex.slice(6, 8)) || 'ff';

	return {
		r: twoDigitHexR,
		g: twoDigitHexG,
		b: twoDigitHexB,
		a: twoDigitHexA,
	};
};

const hexToDecimal = (hex: string) => parseInt(hex, 16);

const hexesToDecimals = ({ r, g, b, a }: RgbType): RgbType => ({
	r: hexToDecimal(r),
	g: hexToDecimal(g),
	b: hexToDecimal(b),
	a: +(hexToDecimal(a) / 255).toFixed(2),
});

const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);

const formatRgb = (decimalObject: RgbType, parameterA: number) => {
	const { r, g, b, a: parsedA } = decimalObject;
	const a = isNumeric(parameterA) ? parameterA : parsedA;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

class Utils {
	public static skipArray(arr: any[], c: number) {
		return arr.filter((_: any, i: number) => {
			if (i > c - 1) {
				return true;
			}
			return false;
		});
	}

	public static takeArray(arr: any[], c: number) {
		return arr.filter((_: any, i: number) => {
			if (i <= c - 1) {
				return true;
			}
			return false;
		});
	}

	public static capitalize = (s: string) => {
		if (typeof s !== 'string') {
			return '';
		}
		return s.charAt(0).toUpperCase() + s.slice(1);
	};

	public static isTablet = () => {
		return isTablet();
	};

	public static getOrientation = (): ScreenOrientation => {
		const orientation: OrientationType = Orientation.getInitialOrientation();
		return orientation === 'PORTRAIT' || orientation === 'PORTRAIT-UPSIDEDOWN' ? 'PORTRAIT' : 'LANDSCAPE';
	};

	public static getImageSize = (url: string): Promise<{ width: number; height: number }> => {
		return new Promise((resolve, reject) => {
			ImageSize.getSize(url)
				.then(({ width, height }: { width: number; height: number; rotation?: number }) => {
					resolve({ width, height });
				})
				.catch(reject);
		});
	};

	public static hexToRgba = (hex: string, opacity: number) => {
		const hashlessHex = removeHash(hex);
		const hexObject = parseHex(hashlessHex);
		const decimalObject = hexesToDecimals(hexObject);

		return formatRgb(decimalObject, opacity);
	};

	public static formatDate = (value: string | Date, format?: string, formatInput?: string) => {
		Moment.locale(DEFAULT_LANGUAGE);
		return (formatInput ? Moment(value, formatInput) : Moment(value)).format(format ?? DATE_FORMAT_DEFAUT);
	};

	public static sortAlphabetically(arr: any[]) {
		return arr.sort(function (a, b) {
			if (Utils.removeAccents(a.label) < Utils.removeAccents(b.label)) {
				return -1;
			}
			if (Utils.removeAccents(a.label) > Utils.removeAccents(b.label)) {
				return 1;
			}
			return 0;
		});
	}

	public static sortAlphabeticallyByKey<T, K extends keyof T>(arr: T[], key: K) {
		return arr.sort((a, b) => {
			const aValue = Utils.removeAccents(a[key] as any);
			const bValue = Utils.removeAccents(b[key] as any);
			if (aValue < bValue) {
				return -1;
			}
			if (aValue > bValue) {
				return 1;
			}
			return 0;
		});
	}

	public static removeAccents = (str: string) => {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	};

	public static formatNumber = (n: number) => {
		return n > -10 && n < 10 ? '0' + n : n;
	};

	public static hasPolicies(userPolicies: string[], policies: (keyof typeof POLICIES)[], type: 'OR' | 'AND' = 'AND') {
		const allowed =
			type === 'AND'
				? (policies || [])
						.map((p) => ((userPolicies || []).find((up) => up === POLICIES[p]) ? true : false))
						.filter((p) => !p).length === 0
					? true
					: false
				: (policies || [])
						.map((p) => ((userPolicies || []).find((up) => up === POLICIES[p]) ? true : false))
						.filter((p) => p).length > 0
				? true
				: false;

		return allowed;
	}

	public static formatCurrency(value: number) {
		numbro.languageData().delimiters.thousands = ' ';
		numbro.languageData().delimiters.thousandsSize = 3;
		numbro.languageData().delimiters.decimal = ',';

		return numbro(value || 0).formatCurrency({
			thousandSeparated: true,
			mantissa: 2,
			// optionalMantissa: true,
			currencySymbol: '€',
			currencyPosition: 'postfix',
			spaceSeparatedCurrency: true,
		});
	}

	public static flatten<T>(list: any | any[]): T[] {
		return list.reduce((a: any, b: any) => a.concat(Array.isArray(b) ? this.flatten(b) : b), []);
	}

	public static search<T>(data: T[], searchTerm: string, searchFuncs: ((m: T) => string)[]): T[] {
		const s = Utils.removeAccents(searchTerm.toLowerCase());

		return data.filter((item) => {
			for (const searchFunc of searchFuncs) {
				const value = Utils.removeAccents((searchFunc(item) ?? '').toString().toLowerCase());
				if (value.includes(s)) {
					return true;
				}
			}
			return false;
		});
	}
}

export default Utils;
