import { Injectable } from "@angular/core";

export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root",
})
export class WebapiService {
  constructor() {}

  getTodos(): Todo[] {
    return [
      {
        title: "Mon todo 1 qsmflsqjflmsdj",
        completed: true,
      },
      {
        title: "Mon todo 2",
        completed: false,
      },
    ];
  }
}
