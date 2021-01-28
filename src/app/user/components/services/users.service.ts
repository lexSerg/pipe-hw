import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  URL : string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http : HttpClient) { }
  getUsers():Observable<IUser[]> {
    return this.http.get<IUser[]>(this.URL)
  }
}
