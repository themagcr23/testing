import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './FiltersScreen.style';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import FilterListItem from './components/listItem/FilterListItem';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from 'src/Router';

const FiltersScreen = () => {
	const categorias = [
		{
			id: '1',
			legend: 'Padaria',
			image: 'https://www.pngmart.com/files/17/Fresh-Bakery-PNG-HD.png',
			childs: [
				{
					id: '01',
					legend: 'Padaria',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '001',
					legend: 'Pastelaria',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
			],
		},
		{
			id: '2',
			legend: 'Limpeza da Casa e Roupa',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuD_s-0HtUGdiqH85YED5HAUeCpv-B4Jn4AA&usqp=CAU',
			childs: [
				{
					id: '02',
					legend: 'Limpeza da Cozinha',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '002',
					legend: 'Ambientadores',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '0002',
					legend: 'Produtos Ecológicos',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
			],
		},
		{
			id: '3',
			legend: 'Talho',
			image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
			childs: [
				{
					id: '03',
					parentId: '3',
					legend: 'Frango e Peru',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '003',
					parentId: '3',
					legend: 'Porco',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '0003',
					parentId: '3',
					legend: 'Pato e Coelho',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '00003',
					parentId: '3',
					legend: 'Cabrito e Borrego',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '000003',
					parentId: '3',
					legend: 'Carne Congelada',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
			],
		},
		{
			id: '4',
			legend: 'Fruta e Legumes',
			image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
			childs: [
				{
					id: '04',
					parentId: '4',
					legend: 'Frutas',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '004',
					parentId: '4',
					legend: 'Legumes',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '0004',
					parentId: '4',
					legend: 'Sumos naturaris',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
				{
					id: '00004',
					parentId: '4',
					legend: 'Frutos Secos',
					image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
				},
			],
		},
		{
			id: '5',
			legend: 'Laticinios',
			image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
		},
		{
			id: '6',
			legend: 'Bebidas',
			image: 'https://seeklogo.com/images/C/continente-hipermercados-logo-D8005E7534-seeklogo.com.png',
		},
	];

	const navigation = useNavigation<StackNavigationProp<AuthStackParamList, 'FiltersScreen'>>();
	const route = useRoute<RouteProp<AuthStackParamList, 'FiltersScreen'>>();

	return (
		<MainLayout pageName="Filters">
			<View style={styles.container}>
				<Text style={styles.title}>{'Hipermercados'}</Text>
				<View style={styles.headerContainer}>
					<Text>{'123123'}</Text>
					<Text>{'erter'}</Text>
				</View>
				<Text style={styles.title}>
					{route.params && route.params.pageMode === 'SUB_CATEGORY' ? 'Sub-Categorias' : 'Categorias'}
				</Text>

				<ScrollView style={styles.scrollView}>
					{(route.params && route.params.pageMode !== 'SUB_CATEGORY') || !route.params
						? categorias &&
						  categorias.length && (
								<View style={styles.list}>
									{categorias.map(x => {
										return (
											<View style={styles.listItem}>
												<FilterListItem
													legend={x.legend}
													onClick={() => {
														navigation.navigate('FiltersScreen', {
															categoryId: x.id,
															childs: x.childs as any[],
															pageMode: 'SUB_CATEGORY',
														});
													}}
													image={x.image}
												/>
											</View>
										);
									})}
								</View>
						  )
						: route.params &&
						  route.params.childs &&
						  route.params.childs.length && (
								<View style={styles.list}>
									{route.params.childs.map(x => {
										return (
											<View style={styles.listItem}>
												<FilterListItem legend={x.legend} image={x.image} />
											</View>
										);
									})}
								</View>
						  )}
					<View style={styles.listItem}>
						<FilterListItem legend={'Voltar'} onClick={() => navigation.goBack()} />
					</View>
				</ScrollView>
			</View>
		</MainLayout>
	);
};

export default FiltersScreen;
