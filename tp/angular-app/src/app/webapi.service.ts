import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay, map, pluck, switchMap } from "rxjs/operators";

export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root",
})
export class WebapiService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
    // return of([
    //   {
    //     title: "Mon todo 1 qsmflsqjflmsdj",
    //     completed: true,
    //   },
    //   {
    //     title: "Mon todo 2",
    //     completed: false,
    //   },
    // ]).pipe(delay(1000));
  }
}
