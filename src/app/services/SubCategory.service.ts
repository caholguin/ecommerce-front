import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SubCategory } from '../interfaces/SubCategory.interface';
import { SubCategoryInfo } from '../interfaces/SubCategory.interface';
import { SubCategoryAdapter } from '../adapters/subcategory.adapter';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public getAllSubCategories(): Observable<SubCategory[]> {
    return this.http.get<SubCategoryInfo>(`${this.baseUrl}/subcategories`).pipe(map(resp => SubCategoryAdapter(resp)));
  }

}
