export interface ColumnDefinition<T> {
    field: keyof T;
    header: string;
  }