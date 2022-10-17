export interface CardDto {
	id: number;
	photo: string;
	title: string;
	subTitle?: string;
	labelQuantity?: string;
	price?: string;
	secondPrice?: string;
	itemMarket?: string | null;
	quantity: number;
	markets: MarketDto[] | null;
}

export interface MarketDto {
	id: number;
	photo: string;
	title: string;
	price?: string;
	secondPrice?: string;
	externalLink?: string | null;
}
