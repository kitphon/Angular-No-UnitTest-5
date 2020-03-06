import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '../models/user-data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserData> {
    return this.http.get<UserData>('http://kaypee.io/api/user/data');
  }

}
