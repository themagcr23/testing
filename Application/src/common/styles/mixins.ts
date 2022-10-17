import { Dimensions } from 'react-native';
import { FontFamily } from '../types/Types';

const { height, width } = Dimensions.get('screen');

const trueWidth = (): number => (width < height ? width : height);
const trueHeight = (): number => (width > height ? width : height);

export const vw = (vwN: number) => Math.ceil((vwN / 100) * trueWidth());
export const vh = (vhN: number) => Math.ceil((vhN / 100) * trueHeight());

const baseWidth: number = 360;
export const scale = (size: number) => (trueWidth() / baseWidth) * size;
export const moderateScale = (size: number, factor: number = 0.1) =>
	(size + (scale(size) - size) * factor) * (width < 321 ? 0.8 : 1);

export const fontFamily = (type: FontFamily) => {
	switch (type) {
		case 'BOLD':
			return { fontFamily: 'Galibier-Bold' };
		case 'ETROITBOLD':
			return { fontFamily: 'Galibier-EtroitBold' };
		default:
			return { fontFamily: 'Galibier-Regular' };
	}
};

export const hexToRGBA = (hexCode: string, opacity: number) => {
	let hex = hexCode.replace('#', '');

	if (hex.length === 3) {
		hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
	}

	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	return `rgba(${r},${g},${b},${opacity / 100})`;
};
