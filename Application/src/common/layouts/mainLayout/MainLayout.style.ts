import { StyleSheet } from 'react-native';
import Colors from 'src/common/theme/colors';
import { moderateScale } from '../../styles/mixins';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white,
	},
	headerContainer: {
		width: '100%',
		flexDirection: 'row',
	},
	logoContainer: {
		alignSelf: 'flex-start',
		zIndex: 110,
	},
	mainContentContainer: {
		width: '100%',
		flex: 1,
		backgroundColor: Colors.white,
	},
	mainContentBackDrop: {
		position: 'absolute',
		top: moderateScale(-40),
		left: 0,
		bottom: 0,
		right: 0,
		backgroundColor: Colors.white,
	},
	headerContent: {
		zIndex: 120,
		flex: 1,
		flexDirection: 'row',
	},
	headerContentTitle: {
		color: '#000',
		fontSize: moderateScale(26),
		fontWeight: 'bold',
	},
	menuContent: {
		marginTop: moderateScale(30),
		marginHorizontal: moderateScale(30),
	},
	pageTitleContainer: {
		zIndex: 120,
		marginHorizontal: moderateScale(30),
	},
	pageTitleContentContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
	},
	filterContainer: {
		flexDirection: 'row',
	},
	fliterContainerIcon: {
		width: moderateScale(30),
		height: moderateScale(30),
		fill: '#000',
		marginLeft: moderateScale(10),
	},
	pageFiltersContainer: {
		alignItems: 'center',
		paddingVertical: 25,
	},
	labelBlue: {
		color: Colors.primary,
	},
	bottomSahdow: {
		height: '10%',
		width: '100%',
		position: 'absolute',
		//backgroundColor: '-webkit-gradient: (linear, bottom, from(rgba(66,154,224,0.8)))',
		padding: 5,
		bottom: 0,
	},
});
