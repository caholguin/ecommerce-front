import { Category } from "./Category.interface";

export interface SubCategoryInfo {
    totalElements:    number;
    totalPages:       number;
    size:             number;
    content:          SubCategory[];
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    last:             boolean;
    pageable:         Pageable;
    empty:            boolean;
}

export interface SubCategory {
    id:       number;
    name:     string;
    icon:     null;
    category: Category;
    products: null;
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
