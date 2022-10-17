import React from 'react';
import { Text, View } from 'react-native';
import styles from './NoInternetConnection.style';

const NoInternetConnection = () => {
	return (
		<View style={styles.container}>
			<Text>No Internet</Text>
		</View>
	);
};

export default NoInternetConnection;
