import {Category} from './category';

export interface Product {
  productName?: string,
  category?: Category,
  date?: string,
  price?: number,
  freshness?: string,
  comment?: string
}
