import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ApiResponse, Family } from '../interfaces/Family.interface';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public loadPage(): Observable<Family[]> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/families?size=4`)  
      .pipe(
        map(resp => resp.content)  
      );
  }

  
}
