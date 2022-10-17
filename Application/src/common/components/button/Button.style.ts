import { StyleSheet } from 'react-native';
import variables, { buttonDefaultColor } from 'src/common/theme/variables';

export default StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomEndRadius: variables.borderRadiusSize,
		borderTopStartRadius: variables.borderRadiusSize,
		backgroundColor: buttonDefaultColor,
	},
	text: {
		fontSize: 18,
	},
});
