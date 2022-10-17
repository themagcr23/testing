import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import { MarketDto } from 'src/api/common/models/CardDto';
import Card from 'src/common/components/card/Card';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import styles from './DetailsProductScreen.style';
import IconArrowUpRightFromSquareSolid from 'assets/svgs/arrow_up_right_from_square_solid.svg';
import { ICON_SIZE_LARGE } from 'src/common/theme/variables';
import Colors from 'src/common/theme/colors';
import { AuthStackParamList } from 'src/Router';
import { RouteProp, useRoute } from '@react-navigation/native';

const DetailsProductScreen = () => {
	const route = useRoute<RouteProp<AuthStackParamList, 'DetailsProductScreen'>>();
	const product = route.params.product;

	return (
		<MainLayout pageName="Detalhes" hasFilters>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.container}>
					<Card key={product.id} onPress={() => null} isButtonQuantity={false} isClickable={false}>
						<View style={styles.card}>
							<Image
								source={{ uri: product.imageUrl }}
								resizeMode={'center'}
								style={styles.imageContainer}
							/>
							<View style={styles.infoContainer}>
								<Text style={styles.boldLabel}>{product.name}</Text>
								<Text style={styles.label}>{product.brand}</Text>
								<Text style={styles.smallLabel}>
									{product.quantity + ' ' + product.quantityUnitName}
								</Text>
								<View style={styles.inlineContainer}>
									<Text style={styles.primaryLabel}>
										{'€' + product.price.toString() + '/' + product.priceUnitName}
									</Text>
									<Text style={styles.label}>
										{'€' + product.subPrice.toString() + '/' + product.subPriceUnitName}
									</Text>
								</View>
							</View>
						</View>
					</Card>
				</View>

				{product.markets && product.markets.length && (
					<View style={styles.container}>
						{product.markets.map((market: MarketDto) => {
							return (
								<Card key={market.id} onPress={() => null} isButtonQuantity={false} isClickable={false}>
									<View style={styles.cardMarket}>
										<Image
											source={{ uri: market.photo }}
											resizeMode={'center'}
											style={styles.imageContainerMarket}
										/>
										<View style={styles.infoMarket}>
											<Text style={styles.boldLabelMarket}>{market.title}</Text>
										</View>
										<View style={styles.infoMarketPrices}>
											<Text style={styles.primaryLabel}>{market.price}</Text>
											<Text style={styles.label}>{market.secondPrice}</Text>
										</View>
										<View style={styles.infoMarketLink}>
											<IconArrowUpRightFromSquareSolid
												onPress={() =>
													market.externalLink && Linking.openURL(market.externalLink)
												}
												width={ICON_SIZE_LARGE}
												height={ICON_SIZE_LARGE}
												fill={Colors.primary}
											/>
										</View>
									</View>
								</Card>
							);
						})}
					</View>
				)}
			</ScrollView>
		</MainLayout>
	);
};

export default DetailsProductScreen;
