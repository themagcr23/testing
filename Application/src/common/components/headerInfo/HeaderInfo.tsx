import React, { PureComponent } from 'react';
import styles from './HeaderInfo.style';
import IconArrowDownShortWideSolid from 'assets/svgs/arrow_down_short_wide_solid.svg';
import IconArrowDownWideShortSolid from 'assets/svgs/arrow_down_wide_short_solid.svg';
import { ICON_SIZE } from 'src/common/theme/variables';
import Colors from 'src/common/theme/colors';
import { TouchableOpacity, View, Text } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

interface Props {
	orderLabel: string;
	onPress: () => void;
	numberProducts: number;
	mode: boolean;
}
/*
const HeaderInfo: React.FC<Props> = ({ orderLabel, onPress, numberProducts, mode }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress} style={styles.infoLeft}>
				{!mode && <IconArrowDownShortWideSolid width={ICON_SIZE} height={ICON_SIZE} fill={Colors.white} />}
				{mode && <IconArrowDownWideShortSolid width={ICON_SIZE} height={ICON_SIZE} fill={Colors.white} />}
				<Text style={styles.infoTextLeft}>{orderLabel}</Text>
			</TouchableOpacity>
			<Text style={styles.infoRigth}>{numberProducts + ' Produtos'}</Text>
		</View>
	);
};*/
class HeaderInfo extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.props.onPress} style={styles.infoLeft}>
					{!this.props.mode && (
						<IconArrowDownShortWideSolid width={ICON_SIZE} height={ICON_SIZE} fill={Colors.white} />
					)}
					{this.props.mode && (
						<IconArrowDownWideShortSolid width={ICON_SIZE} height={ICON_SIZE} fill={Colors.white} />
					)}
					<Text style={styles.infoTextLeft}>{this.props.orderLabel}</Text>
				</TouchableOpacity>
				<Text style={styles.infoRigth}>{this.props.numberProducts + ' Produtos'}</Text>
			</View>
		);
	}
}

export default HeaderInfo;
