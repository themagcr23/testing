import { StyleSheet } from 'react-native';
import { FontSize } from 'src/common/theme/variables';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		padding: 20,
	},
	counterContainer: {
		alignItems: 'flex-end',
		paddingTop: 5,
		paddingRight: 20,
	},
	counter: {
		color: 'white',
	},
	noData: {
		alignItems: 'center',
		paddingTop: 50,
	},
	noDataLabel: {
		paddingTop: 25,
		color: 'white',
		fontSize: FontSize.regular,
	},
	listContainer: {
		display: 'flex',
	},
});
