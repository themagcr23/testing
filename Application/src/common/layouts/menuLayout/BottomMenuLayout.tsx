import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { AuthStackParamList } from 'src/Router';
import styles from './BottomMenuLayout.style';

export type BottomMenuScreens = {
	key: number;
	name: string;
	component: React.ComponentType<any>;
	icon?: React.ReactNode;
	label?: string;
};

const Tab = createBottomTabNavigator();

const BottomMenuLayout = () => {
	const route = useRoute<RouteProp<AuthStackParamList, 'BottomMenuLayout'>>();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: route.params.onlyIcon ? false : true,
				tabBarStyle: styles.container,
			}}
		>
			{route.params.screens &&
				route.params.screens.length &&
				route.params.screens.map(x => {
					return (
						<Tab.Screen
							key={x.key}
							name={x.name}
							component={x.component}
							options={{
								tabBarLabel: x.label,
								tabBarIcon: () => x.icon,
								tabBarActiveBackgroundColor: 'black',
								tabBarItemStyle: styles.item,
							}}
						/>
					);
				})}
		</Tab.Navigator>
	);
};

export default BottomMenuLayout;
