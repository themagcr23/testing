import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import styles from './ProductsScreen.style';
import Card from 'src/common/components/card/Card';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/Router';
import HeaderInfo from 'src/common/components/headerInfo/HeaderInfo';
import { ProductDto } from 'src/api/products/models/ProductDto';
import Loading from 'src/common/services/Loading';
import { ProductsSearchCriteria } from 'src/api/products/models/ProductsSearchCriteria';
import { DEFAULT_PAGINATION_ITEMS_PER_PAGE } from 'src/Config';
import Logger from 'src/common/services/Logger';
import { Alert } from 'src/common/services/Alert';
import { LogType } from 'src/api/logs/enums/LogType';
import ProductsService from 'src/api/products/ProductsService';

const ProductsScreen = () => {
	const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'BottomMenuLayout'>>();

	const [order, setOrder] = useState<boolean>(false);

	const [criteria, setCriteria] = useState<ProductsSearchCriteria>({
		itemsPerPage: DEFAULT_PAGINATION_ITEMS_PER_PAGE,
		page: 1,
		orderColumn: 'p.name',
		orderBy: 'asc',
	});

	const [products, setProducts] = useState<ProductDto[]>([]);
	const [totalProducts, setTotalProducts] = useState<number>(0);

	const prods: ProductDto[] = [
		{
			id: '1',
			name: 'Azeite Virgem Extra Selecionado Pet',
			brand: 'Oliveria da Serra',
			productUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwe2dd947b/images/col/709/7099734-frente.jpg',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwe2dd947b/images/col/709/7099734-frente.jpg',
			quantity: '75',
			quantityUnitName: 'cl',
			price: 2.99,
			priceUnitName: 'un',
			subPrice: 3.99,
			subPriceUnitName: 'lt',
			itemMarket: null,
			storeId: '',
			storeName: '',
			storeLogoPath: '',
			storeUrl: '',
			markets: [
				{
					id: 1,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 2,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 3,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 4,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 5,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 6,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 7,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 8,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 9,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 10,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
			],
		},
		{
			id: '2',
			name: 'zAzeite Virgem Extra Selecionado Pet',
			brand: 'Oliveria da Serra',
			productUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwe2dd947b/images/col/709/7099734-frente.jpg',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwe2dd947b/images/col/709/7099734-frente.jpg',
			quantity: '75',
			quantityUnitName: 'cl',
			price: 2.99,
			priceUnitName: 'un',
			subPrice: 3.99,
			subPriceUnitName: 'lt',
			itemMarket: null,
			storeId: '',
			storeName: '',
			storeLogoPath: '',
			storeUrl: '',
			markets: [
				{
					id: 1,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 2,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 3,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 4,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 5,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 6,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 7,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 8,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 9,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 10,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
			],
		},
	];

	/*const prods: ProductDto[] = [
		{
			id: '1',
			name: 'Azeite Virgem Extra Selecionado Pet',
			brand: 'Oliveria da Serra',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwe2dd947b/images/col/709/7099734-frente.jpg',
			quantity: 'emb. 75',
			quantityUnitName: 'cl',
			price: 2.99,
			priceUnitName: 'un',
			subPrice: 3.99,
			subPriceUnitName: 'lt',
			itemMarket: null,
			markets: [
				{
					id: 1,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 2,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 3,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 4,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 5,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 6,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 7,
					photo: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
					title: 'Continente',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.continente.pt/',
				},
				{
					id: 8,
					photo: 'https://scontent.fopo2-1.fna.fbcdn.net/v/t39.30808-6/271499052_3226809540976657_5176884220155632016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6cYCVBGCAGoAX9nSxLp&_nc_ht=scontent.fopo2-1.fna&oh=00_AT9F6lf1_azB7-o7J-dRixRKCidSDnqb19KblcUltEohAg&oe=633E5A9E',
					title: 'Auchan',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.auchan.pt/',
				},
				{
					id: 9,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
				{
					id: 10,
					photo: 'https://cdn3.commerce-associe.fr/sites/default/files/styles/logo_enseigne/public/2018-08/Intermarche%CC%81-hyper-logo-270x160.png',
					title: 'Intermarché',
					price: '€2,99/un',
					secondPrice: '€3,99/lt',
					externalLink: 'https://www.intermarche.pt/',
				},
			],
		},
		{
			id: '2',
			name: 'Cápsulas de Café Buondi Int 8',
			brand: 'Dolce Gusto',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dwf9104c04/images/col/740/7405690-frente.jpg',
			quantity: 'emb. 64',
			quantityUnitName: 'un',
			price: 17.99,
			priceUnitName: 'un',
			subPrice: 0.28,
			subPriceUnitName: 'un',
			itemMarket: null,
			markets: null,
		},
		{
			id: '3',
			name: 'Limão',
			brand: 'Continente',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw134af6b4/images/col/207/2076509-frente.jpg',
			quantity: 'Quant. Mínima = 400',
			quantityUnitName: 'gr',
			price: 2.49,
			priceUnitName: 'kg',
			subPrice: 0.5,
			subPriceUnitName: 'un',
			itemMarket: null,
			markets: null,
		},
		{
			id: '4',
			name: 'Presunto Fatiado',
			brand: 'Casa do Monte',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw22e315ad/images/col/721/7218060-frente-fatia.jpg',
			quantity: 'emb. 150',
			quantityUnitName: 'gr',
			price: 2.65,
			priceUnitName: 'un',
			subPrice: 17.67,
			subPriceUnitName: 'kg',
			itemMarket: null,
			markets: null,
		},
		{
			id: '5',
			name: 'Ração para Gato Adulto Esterilizado Bolas de Pelo Frango',
			brand: 'Purina One',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw0cde4e10/images/col/548/5481686-frente.jpg',
			quantity: 'emb. 800',
			quantityUnitName: 'gr',
			price: 5.24,
			priceUnitName: 'un',
			subPrice: 6.55,
			subPriceUnitName: 'kg',
			itemMarket: null,
			markets: null,
		},
		{
			id: '6',
			name: 'Champô Hidratação Intensa',
			brand: 'Tresemmé',
			imageUrl:
				'https://www.continente.pt/dw/image/v2/BDVS_PRD/on/demandware.static/-/Sites-col-master-catalog/default/dw23acebe7/images/col/642/6421996-frente.jpg',
			quantity: 'emb. 900',
			quantityUnitName: 'ml',
			price: 6.59,
			priceUnitName: 'un',
			subPrice: 7.32,
			subPriceUnitName: 'lt',
			itemMarket: null,
			markets: null,
		},
	];*/

	const onSearch = async () => {
		try {
			Loading.show();
			//const result = await ProductsService.getList(criteria);
			const result = { items: [...prods], totalItems: 1 };
			setProducts(criteria.page === 1 ? result.items : [...products, ...result.items]);
			setTotalProducts(result.totalItems);
			Loading.hide();
		} catch (error) {
			Alert.error('erro', 'erro ao carregar');
			Logger.error(LogType.REQUEST, 'error getting products', error);
			Loading.hide();
		}
	};

	useEffect(() => {
		onSearch();
	}, [criteria]);

	const onQuantityChange = (product: ProductDto, qtdIncrement: any) => {
		let newProds = products;
		let productIndex = products.findIndex(x => x.id === product.id);

		newProds[productIndex].quantity = Number(newProds[productIndex].quantity) + qtdIncrement;

		setProducts([...newProds]);
	};

	return (
		<MainLayout pageName="Produtos" hasFilters>
			<View style={styles.container}>
				<View style={styles.containerInfo}>
					<HeaderInfo
						orderLabel={'ordenação alfabética'}
						onPress={() => setOrder(!order)}
						mode={order}
						numberProducts={totalProducts}
					/>
				</View>
				<ScrollView contentContainerStyle={styles.container}>
					{products && products.length > 0 && (
						<View>
							{products.map(x => {
								return (
									<Card
										testID={'card'}
										key={x.id}
										onPress={() =>
											navigation.navigate('DetailsProductScreen', {
												product: x,
											})
										}
										isButtonQuantity={true}
										isClickable={true}
										onQuantityChange={qtdIncrement => {
											onQuantityChange(x, qtdIncrement);
										}}
										quantity={Number(x.quantity)}
									>
										<View style={styles.card}>
											<Image
												source={{ uri: x.imageUrl }}
												resizeMode={'center'}
												style={styles.imageContainer}
											/>
											<View style={styles.infoContainer}>
												<Text style={styles.boldLabel} testID="cardName">
													{x.name}
												</Text>
												<Text style={styles.label}>{x.brand}</Text>
												<Text style={styles.smallLabel}>
													{x.quantity + ' ' + x.quantityUnitName}
												</Text>
												<View style={styles.inlineContainer}>
													<Text style={styles.primaryLabel}>
														{'€' + x.price.toString() + '/' + x.priceUnitName}
													</Text>
													<Text style={styles.label}>
														{'€' + x.subPrice.toString() + '/' + x.subPriceUnitName}
													</Text>
												</View>
											</View>
										</View>
									</Card>
								);
							})}
						</View>
					)}
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default ProductsScreen;
