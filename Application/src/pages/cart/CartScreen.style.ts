import { StyleSheet } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';
import Colors from 'src/common/theme/colors';
import variables from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 20,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	card: {
		flexDirection: 'row',
		backgroundColor: Colors.white,
		padding: moderateScale(10),
		borderRadius: variables.borderRadiusSize,
	},
	imageContainer: {
		width: '35%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoContainer: {
		paddingLeft: moderateScale(20),
		paddingRight: moderateScale(20),
		alignItems: 'flex-start',
		width: '65%',
	},
	boldLabel: {
		color: Colors.black,
		fontWeight: 'bold',
	},
	smallLabel: {
		fontSize: moderateScale(14),
	},
	label: {
		fontSize: moderateScale(12),
	},
	inlineContainer: {
		flexDirection: 'row',
		alignItems: 'baseline',
	},
	primaryLabel: {
		color: Colors.primary,
		fontWeight: 'bold',
		fontSize: moderateScale(18),
		marginRight: 10,
	},
	imageMarketCard: {
		width: '80%',
		height: '80%',
		position: 'absolute',
	},
	containerMarket: {
		borderWidth: 2,
		borderRadius: 5,
		borderColor: '-webkit-gradient: (linear, bottom, from(rgba(66,154,224,0.5)))',
		position: 'absolute',
		width: '7%',
		height: '40%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
