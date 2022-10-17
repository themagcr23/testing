export interface Paged<T> {
	currentPage: number;
	totalPages?: number;
	totalItems: number;
	itemsPerPage: number;
	items: T[];
}
