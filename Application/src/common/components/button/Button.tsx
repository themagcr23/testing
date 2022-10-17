import React from 'react';
import { TouchableOpacity, Text, View, TextStyle, StyleProp, ViewStyle } from 'react-native';
import { buttonDefaultColor } from 'src/common/theme/variables';
import styles from './Button.style';

interface Props {
	text?: string;
	color?: string;
	textColor?: string;
	onPress: () => void;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
	textStyle?: TextStyle;
	renderIcon?: () => any;
}

const Button: React.FC<Props> = ({
	text,
	color,
	textColor,
	onPress,
	disabled,
	style,
	textStyle,
	renderIcon,
}: Props) => {
	return (
		<TouchableOpacity disabled={disabled} onPress={onPress}>
			<View style={[styles.button, { backgroundColor: color ?? buttonDefaultColor }, style && style]}>
				{!!renderIcon && <View style={text ? { marginRight: 10 } : undefined}>{renderIcon()}</View>}
				<Text style={[styles.text, textStyle && textStyle, { color: textColor ?? undefined }]}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default Button;
