import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from './ButtonQuantity.style';
import IconPlus from 'assets/svgs/plus_solid.svg';
import IconMinus from 'assets/svgs/minus_solid.svg';
import { ICON_SIZE } from 'src/common/theme/variables';

interface Props {
	onPressMinus: () => void;
	onPressPlus: () => void;
	renderIcon: () => any;
	counter: number;
}

const ButtonQuantity = ({ onPressMinus, onPressPlus, renderIcon, counter }: Props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={counter > 0 ? onPressMinus : () => null}>
				{counter > 0 && <IconMinus width={ICON_SIZE} height={ICON_SIZE} fill={'white'} />}
			</TouchableOpacity>
			<View style={styles.info}>
				{counter === 0 && renderIcon()}
				{counter > 0 && (
					<Text style={[styles.text]}>
						{counter} {'un'}
					</Text>
				)}
			</View>
			<TouchableOpacity style={styles.button} onPress={onPressPlus}>
				<IconPlus width={ICON_SIZE} height={ICON_SIZE} fill={'white'} />
			</TouchableOpacity>
		</View>
	);
};

export default ButtonQuantity;
