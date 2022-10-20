import React, { useState } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { withTranslation } from 'react-i18next';
import styles from './MainLayout.style';
//import Logo from './components/logo/Logo';
//import Hamburger from 'react-native-animated-hamburger';
import MainContent from 'assets/svgs/mainContent.svg';
import Filters from './components/filters/Filters';
//import SearchLogo from 'assets/svgs/search.svg';
import FilterLogo from 'assets/svgs/filter.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/Router';
import FiltersScreen from 'src/pages/filters/FiltersScreen';

interface Props {
	children: React.ReactElement;
	pageName: string;
	hasCompanies?: boolean;
	hasFilters?: boolean;
	showCarrosselList?: boolean;
	selectTypeActive?: boolean;
}

const MainLayout: React.FC<Props> = ({
	children,
	pageName,
	hasCompanies,
	hasFilters,
	showCarrosselList,
	selectTypeActive,
}: Props) => {
	const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'FiltersScreen'>>();

	const [menuActive, setMenuActive] = useState<boolean>(false);
	const [showFilter, setShowFilter] = useState<boolean>(false);

	return (
		<View style={styles.container}>
			<View>
				<View style={styles.headerContainer}>
					<View style={styles.headerContent}>
						<View style={styles.menuContent}>
							{/*<Hamburger
								type={pageName === 'Detalhes' ? 'arrow' : 'cross'}
								active={menuActive}
								onPress={() => {
									setMenuActive(true);
									console.log('menuActive', menuActive);
									navigation.navigate('MenuScreen');
								}}
							/>*/}
						</View>
						{selectTypeActive && (
							<View style={styles.menuContent}>
								<Text>{'select'}</Text>
							</View>
						)}
					</View>
					<View style={styles.logoContainer}>
						{/*<Logo />*/}
					</View>
				</View>
				<View style={styles.pageTitleContainer}>
					<View style={styles.pageTitleContentContainer}>
						<Text style={styles.headerContentTitle}>{pageName}</Text>
						{hasFilters && (
							<View style={styles.filterContainer}>
								<TouchableWithoutFeedback
									onPress={() => {
										navigation.navigate('BottomMenuLayout', {
											onlyIcon: true,
											screens: [
												{
													key: 1,
													name: 'Filtros',
													component: FiltersScreen,
													label: 'Filtrar',
												},
											],
										});
									}}
								>
									<FilterLogo style={styles.fliterContainerIcon} />
								</TouchableWithoutFeedback>
							</View>
						)}
					</View>
					{showFilter && <Filters />}
					{showCarrosselList && (
						<View style={styles.pageFiltersContainer}>
							<Text style={styles.labelBlue}>{'Sem hipermercados selecionados'}</Text>
						</View>
					)}
				</View>
			</View>
			<View style={styles.mainContentContainer}>
				<View style={styles.mainContentBackDrop}>
					{/*<MainContent preserveAspectRatio="none" />*/}
				</View>
				{children}
			</View>
			{/* <View style={styles.bottomSahdow} /> */}
			<Image style={styles.bottomSahdow} source={require('assets/images/fundo.png')} />
		</View>
	);
};

export default withTranslation()(MainLayout);
