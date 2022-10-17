import { StyleSheet } from 'react-native';
import { vw } from '../../styles/mixins';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#cc3132', // '#cc3132',
		padding: vw(5),
	},
	icon: {
		color: '#fff',
		marginBottom: 10,
		fontSize: 99,
	},
	oops: {
		fontSize: 28,
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
	},
	title: {
		fontSize: 22,
		color: '#fff',
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
	},
	question: {
		fontSize: 16,
		textAlign: 'center',
		color: '#fff',
	},
	buttonsContainer: {
		flexDirection: 'row',
		marginTop: 28,
	},
	button: {
		backgroundColor: '#009c86',
		borderRadius: 4,
		padding: 12,
		width: 80,
		marginHorizontal: 10,
	},
	buttonOutline: {
		backgroundColor: 'white',
		borderRadius: 4,
		padding: 12,
		width: 80,
		marginHorizontal: 10,
	},
	buttonTextOutline: {
		fontSize: 14,
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	buttonText: {
		fontSize: 14,
		color: 'black',
		textAlign: 'center',
	},
});
