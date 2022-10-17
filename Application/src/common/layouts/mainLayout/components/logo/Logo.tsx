import React, { PureComponent, ReactNode } from 'react';
import { View } from 'react-native';
import styles from './Logo.style';
import LogoIcon from 'assets/svgs/logo.svg';
import LogoContainer from 'assets/svgs/logoContainer.svg';

type Props = {
};

class Logo extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<View style={styles.mainContainer}>
				<LogoContainer style={styles.logoContainer} preserveAspectRatio='none' />
				<View style={styles.logoIconContainer}>
					<LogoIcon />
				</View>
			</View>
		);
	}
}

export default (Logo);
