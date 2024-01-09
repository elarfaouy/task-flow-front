import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../../model/task.interface";

const params = {authUserId: 1};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string = "http://localhost:8888/api/task";

  constructor(private http: HttpClient) {
  }

  getAllTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.url);
  }

  getOneTask(id: number): Observable<TaskInterface> {
    return this.http.get<TaskInterface>(this.url + `/${id}`);
  }

  storeTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.url, task, {params});
  }

  updateTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(this.url + `/${task.id}`, task, {params});
  }

  updateTaskStatus(task: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(this.url + `/${task.id}/status`, task, {params});
  }

  updateTaskAssign(task: TaskInterface): Observable<TaskInterface> {
    return this.http.put<TaskInterface>(this.url + `/${task.id}/assign`, task, {params});
  }

  deleteTask(id: number): Observable<TaskInterface> {
    return this.http.delete<TaskInterface>(this.url + `/${id}`, {params});
  }
}
