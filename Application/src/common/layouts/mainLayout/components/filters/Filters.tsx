import React, { PureComponent } from 'react';
import { View } from 'react-native';
import styles from './Filters.style';

type Props = {
};

class Logo extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<View style={styles.mainContainer}>
			</View>
		);
	}
}

export default (Logo);