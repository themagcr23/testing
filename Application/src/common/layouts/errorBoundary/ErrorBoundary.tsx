import React, { PureComponent, ReactNode } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { withTranslation, WithTranslation } from 'react-i18next';
import Logger from '../../services/Logger';
import styles from './ErrorBoundary.style';
import { LogType } from 'src/api/logs/enums/LogType';

type Props = {
	children: ReactNode;
} & WithTranslation;

interface State {
	hasError: boolean;
	error: any;
}

class ErrorBoundary extends PureComponent<Props, State> {
	public static getDerivedStateFromError(error: any) {
		return { hasError: true, error };
	}

	constructor(props: Props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	public close = () => {
		Logger.error(LogType.APP_CRASH, 'Application crashed', {
			error: this.state.error,
		});
		this.setState({ hasError: false, error: null });
	};

	public render() {
		if (this.state.hasError) {
			const { t }: Props = this.props;

			return (
				<View style={styles.container}>
					{/* <Icon name="times" style={styles.icon} /> */}
					<Text style={styles.oops}>{t('common.error_oops')}</Text>
					<Text style={styles.title}>{t('common.error_title')}</Text>
					<Text style={styles.question}>{t('common.error_question')}</Text>

					<View style={styles.buttonsContainer}>
						<TouchableOpacity onPress={this.close}>
							<View style={styles.buttonOutline}>
								<Text style={styles.buttonTextOutline}>{t('common.ok')}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
		return this.props.children;
	}
}

export default withTranslation()(ErrorBoundary);
