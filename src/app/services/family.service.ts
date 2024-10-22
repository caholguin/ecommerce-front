import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FamilyInfo, Family } from '../interfaces/Family.interface';
import { FamilyAdapter } from '../adapters/familiy.adapter';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private readonly baseUrl:String = environment.baseUrl;
  private http = inject(HttpClient);

  public getFamilies(): Observable<Family[]> {
    return this.http.get<FamilyInfo>(`${this.baseUrl}/families?size=4`).pipe(map(info => FamilyAdapter(info)));
  }
  
}
