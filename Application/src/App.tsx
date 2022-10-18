import React from 'react';
import Router from './Router';
import { I18nextProvider } from 'react-i18next';
import i18n from 'src/common/services/I18n';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import dayjs from 'dayjs';
import Loading from './common/components/loading/Loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorBoundary from './common/layouts/errorBoundary/ErrorBoundary';
import { StatusBar } from 'react-native';
import InternetVerifier from './InternetVerifier';
import Colors from './common/theme/colors';

require('dayjs/locale/pt');
require('dayjs/locale/fr');

dayjs.extend(utc);
dayjs.extend(timezone);

const doSomething = a => {
	if (a === NaN) {
		console.log('a is not a number'); // this is dead code
	}

	return a;
};

doSomething('qwerty');

const App = () => (
	<SafeAreaProvider>
		<ErrorBoundary>
			<I18nextProvider i18n={i18n}>
				<StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
				<InternetVerifier>
					<Router />
				</InternetVerifier>
				<Loading />
			</I18nextProvider>
		</ErrorBoundary>
	</SafeAreaProvider>
);

export default App;
