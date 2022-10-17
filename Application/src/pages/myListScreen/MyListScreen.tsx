import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import styles from './MyListScreen.style';
import MainLayout from 'src/common/layouts/mainLayout/MainLayout';
import NoDataIcon from 'assets/svgs/clipboard_list_solid.svg';
import { ICON_SIZE_EXTRA_LARGE } from 'src/common/theme/variables';

const MyListScreen = () => {
	const products: [] = [];
	return (
		<MainLayout pageName="Minha Lista" selectTypeActive showCarrosselList>
			<ScrollView contentContainerStyle={styles.container}>
				<View style={styles.counterContainer}>
					<Text style={styles.counter}>{products.length + ' ' + 'Produtos'}</Text>
				</View>
				{products.length ? (
					<View style={styles.listContainer} />
				) : (
					<View style={styles.noData}>
						<NoDataIcon width={ICON_SIZE_EXTRA_LARGE} height={ICON_SIZE_EXTRA_LARGE} fill={'white'} />
						<Text style={styles.noDataLabel}>{'Sem Produtos na lista'}</Text>
					</View>
				)}
			</ScrollView>
		</MainLayout>
	);
};

export default MyListScreen;
