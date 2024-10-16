export interface ApiResponse {
    totalElements:    number;
    totalPages:       number;
    size:             number;
    content:          Category[];
    number:           number;
    sort:             Sort;
    first:            boolean;
    last:             boolean;
    numberOfElements: number;
    pageable:         Pageable;
    empty:            boolean;
}

export interface Category {
    id:            number;
    name:          string;
    icon:          string;
    family:        Family;
    subCategories: Subcategories[];
}

export interface Family {
    id:   number;
    name: string;
}

export interface Subcategories {
    id:   number;
    name: string;
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







