import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './DockMenuScreen.style';
import Colors from 'src/common/theme/colors';

const DockMenuScreen = memo(() => (
	<View style={styles.loadingBackground}>
		<View style={styles.loading}>
			<ActivityIndicator animating size="large" color={Colors.black} />
		</View>
	</View>
));

export default DockMenuScreen;
