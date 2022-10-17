import { PagedSearchCriteria } from '../../common/types/PagedSearchCriteria';

export interface ProductsSearchCriteria extends PagedSearchCriteria {
	name?: string;
	categoryId?: string;
	IsParent?: boolean;
	ParentId?: string;
}
