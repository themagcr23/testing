import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import styles from './CartScreen.style';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import { CardDto } from 'src/api/common/models/CardDto';
import Card from 'src/common/components/card/Card';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/Router';
import HeaderInfo from 'src/common/components/headerInfo/HeaderInfo';

const CartScreen = () => {
	const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'BottomMenuLayout'>>();

	const [order, setOrder] = useState<boolean>(false);

	const cart: CardDto[] = [
		{
			id: 4,
			photo: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw22e315ad/images/col/721/7218060-frente-fatia.jpg',
			title: 'Presunto Fatiado',
			subTitle: 'Casa do Monte',
			labelQuantity: 'emb. 150 gr',
			price: '€2,65/un',
			secondPrice: '€17,67/kg',
			itemMarket: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
			markets: null,
			quantity: 1,
		},
		{
			id: 6,
			photo: 'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw23acebe7/images/col/642/6421996-frente.jpg',
			title: 'Champô Hidratação Intensa',
			subTitle: 'Tresemmé',
			labelQuantity: 'emb. 900 ml',
			price: '€6,59/un',
			secondPrice: '€7,32/lt',
			itemMarket:
				'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
			markets: null,
			quantity: 3,
		},
	];

	return (
		<MainLayout pageName="Lista Compras" hasFilters>
			<ScrollView contentContainerStyle={styles.container}>
				{cart && cart.length && (
					<View style={styles.container}>
						<HeaderInfo
							orderLabel={'ordenação hipermercado'}
							onPress={() => setOrder(!order)}
							mode={order}
							numberProducts={cart.length}
						/>
						{cart.map(x => {
							return (
								<Card
									key={x.id}
									onPress={() =>
										navigation.navigate('DetailsProductScreen', {
											product: x,
										})
									}
									isButtonQuantity={true}
									quantity={x.quantity}
									isClickable={true}
								>
									<View style={styles.card}>
										{x.itemMarket && (
											<View style={styles.containerMarket}>
												<Image
													source={{ uri: x.itemMarket }}
													resizeMode={'center'}
													style={styles.imageMarketCard}
												/>
											</View>
										)}
										<Image
											source={{ uri: x.photo }}
											resizeMode={'center'}
											style={styles.imageContainer}
										/>
										<View style={styles.infoContainer}>
											<Text style={styles.boldLabel}>{x.title}</Text>
											<Text style={styles.label}>{x.subTitle}</Text>
											<Text style={styles.smallLabel}>{x.labelQuantity}</Text>
											<View style={styles.inlineContainer}>
												<Text style={styles.primaryLabel}>{x.price}</Text>
												<Text style={styles.label}>{x.secondPrice}</Text>
											</View>
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

export default CartScreen;
