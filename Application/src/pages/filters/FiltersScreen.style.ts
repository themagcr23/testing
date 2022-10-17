import { StyleSheet } from 'react-native';
import { FontSize } from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	containerFilters: {
		marginTop: 20,
	},
	scrollView: {
		marginTop: 10,
	},
	title: {
		fontSize: FontSize.regular,
		color: 'white',
	},
	headerContainer: {
		display: 'flex',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingBottom: 25,
		marginBottom: 10,
	},
	bodyContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	list: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start', // if you want to fill rows left to right
	},
	listItem: {
		width: '50%',
		marginTop: 10,
	},
	buttonFilter: {
		marginBottom: 20,
		paddingHorizontal: 20,
		paddingVertical: 15,
		justifyContent: 'center',
		borderRadius: 10,
	},
});
