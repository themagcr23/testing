import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from 'src/pages/menu/MenuScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomMenuLayout, { BottomMenuScreens } from './common/layouts/menuLayout/BottomMenuLayout';
import FiltersScreen from './pages/filters/FiltersScreen';
import DetailsProductScreen from './pages/products/DetailsProductScreen/DetailsProductScreen';
import { ProductDto } from './api/products/models/ProductDto';

export type AuthStackParamList = {
	MenuScreen: undefined;
	FiltersScreen: {
		categoryId: string;
		childs: any[];
		pageMode: string; //enum cat ou subCat
	};
	BottomMenuLayout: {
		onlyIcon: boolean;
		screens: BottomMenuScreens[];
	};
	DetailsProductScreen: {
		product: ProductDto;
	};
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const Router: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName="MenuScreen"
			>
				<Stack.Screen name={'MenuScreen'} component={MenuScreen} />
				<Stack.Screen name={'FiltersScreen'} component={FiltersScreen} />
				<Stack.Screen name={'BottomMenuLayout'} component={BottomMenuLayout} />
				<Stack.Screen name={'DetailsProductScreen'} component={DetailsProductScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
