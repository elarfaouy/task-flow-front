import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = "http://localhost:8888/api/user";

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.url);
  }
}
