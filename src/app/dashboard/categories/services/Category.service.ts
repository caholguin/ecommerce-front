import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category, CategoryInfo } from '../../../interfaces/Category.interface';
import { CategoryAdapter } from '../../../adapters/category.adapter';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);


  public getAllCategories(): Observable<Category[]> {
    return this.http.get<CategoryInfo>(`${this.baseUrl}/categories`).pipe(map(info => CategoryAdapter(info)));
  }

  public addCategory(family: Omit<Category,"id">): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/categories`, family);
  }
  

  public updateCategory(id:number,family:Omit<Category,"id">): Observable<Category> {   
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.put<Category>(url,family);    
  }

  public removeCategory(id:number): Observable<void> {  
    const url = `${this.baseUrl}/categories/${id}`;
    return this.http.delete<void>(url) ;    
  }

}
