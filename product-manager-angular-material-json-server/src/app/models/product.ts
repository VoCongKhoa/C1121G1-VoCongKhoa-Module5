import {Category} from "./Category";

export interface Product {
  productName?: string,
  category?: Category,
  date?: string,
  price?: number,
  freshness?: string,
  comment?: string
}
