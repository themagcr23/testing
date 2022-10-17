import { StyleSheet } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';
import Colors from 'src/common/theme/colors';
import variables from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: Colors.white,
		padding: moderateScale(10),
		borderRadius: variables.borderRadiusSize,
		marginBottom: moderateScale(10),
	},
	button: {
		top: -25,
		left: 15,
		alignSelf: 'flex-end',
		paddingLeft: moderateScale(10),
	},
});
