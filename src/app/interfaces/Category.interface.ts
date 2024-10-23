
import { Family } from "./Family.interface";
import { SubCategory } from "./SubCategory.interface";

export interface CategoryInfo {
    totalElements:    number;
    totalPages:       number;
    size:             number;
    content:          Category[];
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    last:             boolean;
    pageable:         Pageable;
    empty:            boolean;
}

export interface Category {
    id:            number;
    name:          string;
    icon:          string;
    family:        Family;
    subCategories: SubCategory[];
    familyId?:     number;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export const emptyCategory: Omit<Category, 'subCategories'>  = {
    id: 0,
    name: '',
    icon: '',
    familyId: undefined,
    family: {
        id: 0,
        name: '',
        categories: []
    }    
  };

  //<Family, 'id'>