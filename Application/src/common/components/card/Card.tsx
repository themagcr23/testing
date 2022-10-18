import React, { PureComponent } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ICON_SIZE } from 'src/common/theme/variables';
import styles from './Card.style';
import ButtonQuantity from '../buttonQuantity/ButtonQuantity';
import IconCartShoppingSolid from 'assets/svgs/cart_shopping_solid.svg';

type Props = {
	children: React.ReactElement;
	isButtonQuantity: boolean;
	onPress: () => void;
	isClickable: boolean;
	quantity?: number;
};

interface State {
	quantity: number;
}

class Card extends PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			quantity: this.props.quantity ?? 0,
		};
	}

	public render() {
		const { onPress, isButtonQuantity, isClickable }: Props = this.props;
		const { quantity }: State = this.state;

		return (
			<View>
				{isClickable && (
					<TouchableOpacity style={styles.container} onPress={onPress} testID="btn">
						{this.props.children}
					</TouchableOpacity>
				)}
				{!isClickable && <View style={styles.container}>{this.props.children}</View>}
				{isButtonQuantity && (
					<View style={styles.button}>
						<ButtonQuantity
							renderIcon={() => (
								<IconCartShoppingSolid width={ICON_SIZE} height={ICON_SIZE} fill={'white'} />
							)}
							onPressMinus={() => this.setState({ quantity: this.state.quantity - 1 })}
							onPressPlus={() => this.setState({ quantity: this.state.quantity + 1 })}
							counter={quantity}
						/>
					</View>
				)}
			</View>
		);
	}
}

export default Card;
