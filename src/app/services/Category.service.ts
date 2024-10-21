import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { Category, CategoryInfo } from '../interfaces/Category.interface';
import { CategoryAdapter } from '../adapters/category.adapter';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public loadCategories(): Observable<Category[]> {
    return this.http.get<CategoryInfo>(`${this.baseUrl}/categories?size=3`).pipe(map(resp => CategoryAdapter(resp)));
  }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<CategoryInfo>(`${this.baseUrl}/categories`).pipe(map(resp => CategoryAdapter(resp)));
  }

}
