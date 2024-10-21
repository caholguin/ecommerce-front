import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FamilyInfo } from '../../../interfaces/Family.interface';
import { FamilyAdapter } from '../../../adapters/familiy.adapter';
import { Family } from '../../../interfaces/Category.interface';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public getAllFamilies(): Observable<Family[]> {
    return this.http.get<FamilyInfo>(`${this.baseUrl}/families?size=4`).pipe(map(info => FamilyAdapter(info)));
  }

  public addFamily(family: Omit<Family, "id">): Observable<void> {   
    return this.http.post<void>(`${this.baseUrl}/families`, {family}) ;    
  }

  public updateFamily(id:number,family:Family): Observable<void> {   
    const url = `${this.baseUrl}/families/${id}`;
    return this.http.put<void>(url,{family});    
  }

  public removeFamily(id:number): Observable<void> {  
    const url = `${this.baseUrl}/families/${id}`;
    return this.http.delete<void>(url) ;    
  }

}
