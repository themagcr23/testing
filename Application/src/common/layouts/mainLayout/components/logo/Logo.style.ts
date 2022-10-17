import { StyleSheet } from 'react-native';
import Colors from 'src/common/theme/colors';
import { Dimensions } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
	mainContainer: {
		width: moderateScale(100),
		height: moderateScale(100),
		padding: moderateScale(10),
		justifyContent: 'center'
	},
	logoContainer: {
		position: 'absolute',
		width: moderateScale(100),
		height: moderateScale(100),
		top: 0,
		right: 0
	},
	logoIconContainer: {
		width: moderateScale(50),
		height: moderateScale(50),
		alignSelf: 'flex-end',
		marginBottom: moderateScale(25)
	}
});
