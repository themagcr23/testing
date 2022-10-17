import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	imageContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
	},
	background: {
		flexDirection: 'row',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 1,
		borderRadius: 65,
		height: 120,
		width: 120,
	},
	image: {
		width: 115,
		height: 115,
	},
	legend: {
		fontSize: 18,
		color: 'white',
		textAlign: 'center',
	},

	img: {
		width: '60%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
