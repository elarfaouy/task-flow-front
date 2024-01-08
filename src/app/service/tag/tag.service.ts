import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {TagInterface} from "../../model/tag.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private url: string = "http://localhost:8888/api/tag";

  constructor(private http: HttpClient) {
  }

  getAllTags(): Observable<TagInterface[]> {
    return this.http.get<TagInterface[]>(this.url);
  }
}
