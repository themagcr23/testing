import { StyleSheet } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';
import Colors from 'src/common/theme/colors';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingBottom: moderateScale(10),
		width: '100%',
	},
	infoRigth: {
		color: Colors.white,
		fontSize: moderateScale(14),
		width: '50%',
		textAlign: 'right',
	},
	infoLeft: {
		flexDirection: 'row',
		width: '50%',
		textAlign: 'left',
	},
	infoTextLeft: {
		paddingLeft: 10,
		color: Colors.white,
		fontSize: moderateScale(14),
	},
});
