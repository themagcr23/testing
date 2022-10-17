import { StyleSheet } from 'react-native';
import Colors from 'src/common/theme/colors';
import { Dimensions } from 'react-native';
import { moderateScale } from 'src/common/styles/mixins';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: 50,
		borderColor: '#000',
		borderWidth: 1
	},
});
