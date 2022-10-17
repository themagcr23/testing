import React from 'react';
import Button from 'src/common/components/button/Button';
import { ScrollView, View } from 'react-native';
import styles from './MenuScreen.style';
import IconCartShoppingSolid from 'assets/svgs/cart_shopping_solid.svg';
import IconShare from 'assets/svgs/list_icon.svg';
import { ICON_SIZE, ICON_SIZE_LARGE } from 'src/common/theme/variables';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import ProductsScreen from '../products/ProductsScreen';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/Router';
import IconCubesSolid from 'assets/svgs/cubes_solid.svg';
import IconClipboardListSolid from 'assets/svgs/clipboard_list_solid.svg';
import CartScreen from '../cart/CartScreen';
import FiltersScreen from '../filters/FiltersScreen';
import MyListScreen from '../myListScreen/MyListScreen';

const MenuScreen = () => {
	const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'BottomMenuLayout'>>();

	const buttons = [
		{
			text: 'Lista de Compras'.toUpperCase(),
			icon: <IconCartShoppingSolid width={ICON_SIZE} height={ICON_SIZE} fill={'white'} />,
			onPress: () =>
				navigation.navigate('BottomMenuLayout', {
					onlyIcon: true,
					screens: [
						{
							key: 1,
							name: 'Produtos',
							component: ProductsScreen,
							icon: <IconCubesSolid width={ICON_SIZE_LARGE} height={ICON_SIZE_LARGE} fill={'white'} />,
						},
						{
							key: 2,
							name: 'Carrinho',
							component: CartScreen,
							icon: (
								<IconClipboardListSolid
									width={ICON_SIZE_LARGE}
									height={ICON_SIZE_LARGE}
									fill={'white'}
								/>
							),
						},
					],
				}),
		},
		{
			text: 'Minhas Listas Compras'.toUpperCase(),
			icon: <IconShare width={ICON_SIZE} height={ICON_SIZE} fill={'white'} />,
			onPress: () =>
				navigation.navigate('BottomMenuLayout', {
					onlyIcon: true,
					screens: [
						{
							key: 1,
							name: 'MinhaLista',
							component: MyListScreen,
							icon: <IconCubesSolid width={ICON_SIZE_LARGE} height={ICON_SIZE_LARGE} fill={'white'} />,
						},
					],
				}),
		},
	];

	return (
		<MainLayout pageName="Menu" hasFilters>
			<ScrollView contentContainerStyle={styles.container}>
				{buttons && buttons.length && (
					<View style={styles.containerMenu}>
						{buttons.map(x => {
							return (
								<Button
									key={x.text}
									text={x.text}
									textColor={'white'}
									renderIcon={() => x.icon}
									onPress={() => x.onPress && x.onPress()}
									style={styles.button}
								/>
							);
						})}
					</View>
				)}
			</ScrollView>
		</MainLayout>
	);
};

export default MenuScreen;
