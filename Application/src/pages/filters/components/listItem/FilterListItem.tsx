import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from './FilterListItem.style';

type Props = {
	image?: string;
	legend: string;
	onClick?: () => void;
};

class FilterListItem extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);
	}

	public render() {
		const { image, legend, onClick }: Props = this.props;

		return (
			<TouchableOpacity style={styles.container} onPress={onClick}>
				<View style={styles.imageContainer}>
					<View style={styles.background}>
						<Image
							source={{
								uri: image,
							}}
							resizeMode={'center'}
							style={styles.image}
						/>
					</View>
				</View>

				<Text style={styles.legend}>{legend}</Text>
			</TouchableOpacity>
		);
	}
}

export default FilterListItem;
