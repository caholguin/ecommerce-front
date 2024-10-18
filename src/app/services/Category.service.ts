import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { ApiResponse, Category } from '../interfaces/Category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public loadCategories(): Observable<Category[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/categories?size=3`)  
      .pipe(
        map(resp => resp.content)  
      );
  }

  public getAllCategories(): Observable<Category[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/categories`)  
      .pipe(
        map(resp => resp.content)  
      );
  }

}
