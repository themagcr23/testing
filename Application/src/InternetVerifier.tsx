import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import NoInternetConnection from './common/layouts/noInternetConnection/NoInternetConnection';
// import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

type Props = {
	children: React.ReactElement;
};

const InternetVerifier: React.FC<Props> = ({ children }: Props) => {
	const netInfoState = useNetInfo();
	const { type, isInternetReachable, isConnected } = netInfoState;

	useEffect(() => {
		// SplashScreen.hide();
	}, []);

	if (
		(type !== 'unknown' || (Platform.OS === 'android' && type === 'unknown')) &&
		(!isConnected || isInternetReachable === false)
	) {
		return <NoInternetConnection />;
	}

	return children;
};

export default InternetVerifier;
