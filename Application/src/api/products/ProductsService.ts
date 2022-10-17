import Http from 'src/common/services/Http';
import { Paged } from '../common/types/Page';
import { ProductDto } from './models/ProductDto';
import { ProductsSearchCriteria } from './models/ProductsSearchCriteria';

class ProductsService {
	public getList(criteria: ProductsSearchCriteria) {
		return Http.get<Paged<ProductDto>>('list-by-criteria-paged', criteria);
	}
}

export default new ProductsService();
