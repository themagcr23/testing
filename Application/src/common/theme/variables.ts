import { moderateScale } from '../styles/mixins';
import Colors from './colors';

const screenPadding: number = 20;

export default {
	screenPadding: moderateScale(screenPadding, 0.5),
	screenPaddingHome: moderateScale(15, 0.5),
	headerHeight: moderateScale(40, 0.8),
	borderRadiusSize: moderateScale(10),
	modalBorderRadiusSize: moderateScale(28),
};

export const borderRadius: number = moderateScale(35);
export const heightInput: number = moderateScale(47);

export const backgroundColor: string = Colors.primary;
export const ICON_SIZE = 18;
export const ICON_SIZE_LARGE = 25;
export const ICON_SIZE_EXTRA_LARGE = 250;
export const buttonDefaultColor = 'rgba(0, 0, 0, 0.5)';
export const buttonQuantityColor = 'rgba(0, 0, 0, 0.9)';

/**
 * FontSize
 */
export const FontSize = {
	small: 16,
	regular: 24,
	large: 64,
};

export const ZIndex = {
	dropdown: 900,
	screenTopBox: 100,
	selectInput: 2,
	selectBox: 3,
};
