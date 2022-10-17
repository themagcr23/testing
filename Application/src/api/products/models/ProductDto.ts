import { MarketDto } from 'src/api/common/models/CardDto';

export interface ProductDto {
	id: string;
	name: string;
	brand: string;
	productUrl: string;
	imageUrl: string;
	quantity: string;
	quantityUnitName: string;
	price: number;
	priceUnitName: string;
	subPrice: number;
	subPriceUnitName: string;
	storeId?: string;
	storeName: string;
	storeLogoPath: string;
	storeUrl: string;
	//
	itemMarket: string | null;
	markets: MarketDto[] | null;
}
