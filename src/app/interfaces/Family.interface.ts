import { Category } from "./Category.interface";

export interface FamilyInfo {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Family[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
}

export interface Family {
  id: number;
  name: string;
  categories: Category[];
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
