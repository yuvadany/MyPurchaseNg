import { Injectable } from '@angular/core'; 
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';
import 'rxjs/add/operator/map';
import { Items } from '../model/items.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private serviceUrl = 'http://localhost:9988/v1/purchase/all';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<Items[]> {
    return this.http.get<Items[]>(this.serviceUrl);
  }

}
