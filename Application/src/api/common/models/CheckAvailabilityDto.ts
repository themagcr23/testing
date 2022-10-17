export interface CheckAvailabilityDto {
	table: string;
	column: string;
	value: string;
	companyId: boolean;
	itemEdit?: string | null;
}
