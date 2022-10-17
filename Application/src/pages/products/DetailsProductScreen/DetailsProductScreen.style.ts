import { StyleSheet } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';
import Colors from 'src/common/theme/colors';
import variables from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: moderateScale(20),
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
		marginRight: moderateScale(10),
	},
	imageContainerMarket: {
		width: '15%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	infoMarket: {
		paddingLeft: moderateScale(20),
		paddingRight: moderateScale(20),
		alignItems: 'flex-start',
		width: '40%',
		justifyContent: 'center',
	},
	infoMarketPrices: {
		paddingLeft: moderateScale(10),
		paddingRight: moderateScale(10),
		alignItems: 'flex-start',
		width: '30%',
		justifyContent: 'center',
	},
	infoMarketLink: {
		alignItems: 'center',
		width: '15%',
		justifyContent: 'center',
	},
	boldLabelMarket: {
		color: Colors.black,
		fontWeight: 'bold',
		fontSize: moderateScale(16),
	},
	cardMarket: {
		flexDirection: 'row',
		backgroundColor: Colors.white,
		paddingRight: moderateScale(10),
		paddingLeft: moderateScale(10),
		borderRadius: variables.borderRadiusSize,
	},
});
