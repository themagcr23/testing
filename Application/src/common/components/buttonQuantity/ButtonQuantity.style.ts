import { StyleSheet } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';
import Colors from 'src/common/theme/colors';
import variables, { buttonQuantityColor } from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		backgroundColor: buttonQuantityColor,
		borderTopStartRadius: variables.borderRadiusSize,
		borderBottomEndRadius: variables.borderRadiusSize,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '25%',
	},
	button: {
		width: '30%',
		paddingTop: moderateScale(8),
		paddingBottom: moderateScale(8),
		paddingLeft: moderateScale(10),
		paddingRight: moderateScale(10),
	},
	info: {
		width: '40%',
		alignItems: 'center',
	},
	text: {
		fontSize: moderateScale(15),
		color: Colors.white,
		textAlignVertical: 'center',
	},
});
