export interface Family {
    id?:         number;
    name?:       string;
    categories?: Category[];   
}

export interface Category {
    id?:   number;
    name?: string;
    icon?: string;
}

export interface ApiResponse {
    totalPages: number;
    totalElements: number;
    size: number;
    content: Family[];   // Solo mapeamos lo que nos interesa
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
  }
  
  export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  }