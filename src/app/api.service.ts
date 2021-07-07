import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from './user'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: User;
url = "https://usl2021.herokuapp.com/users"
  constructor(
    private http: HttpClient
  ) { }
  apiCall() {
    return this.http.get<any>( "https://usl2021.herokuapp.com/users")
    .pipe(map((res:any)=> {
      return res;
    }))
  }
 
 add(data:User) {
    return this.http.post("https://usl2021.herokuapp.com/users", data)
  }

  delete(data) {
    return this.http.delete<any>(`${this.url}/${data}`)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  update(id:number, user:User) {
    let url = "https://usl2021.herokuapp.com/users/"+id;
    return this.http.put<any>(url,user)
    .pipe(map((res:any)=> {
      return res;
    }))
  }

  getCurrentUser(id){
    let url = "https://usl2021.herokuapp.com/users"
    return this.http.get(`${this.url}/${id}`)
  } 

 
find(id): Observable<User>{
  let url = "https://usl2021.herokuapp.com/users" 
  return this.http.get<User>(this.url + id )
}
  
}
