import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Todo, WebapiService } from "../webapi.service";

@Component({
  selector: "app-page1",
  templateUrl: "page1.component.html",
  styles: [],
})
export class Page1Component implements OnDestroy {
  title = "angular-app";
  monBoutonDisabled = false;
  todos$: Observable<Todo[]>;
  todos: Todo[] = [];
  subscription: Subscription;

  constructor(webapi: WebapiService) {
    this.todos$ = webapi.getTodos();
    this.subscription = webapi
      .getTodos()
      .subscribe((todos) => (this.todos = todos));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClick(name: string) {
    alert(`Hallo ${name}`);
  }

  nbCompleted(): number {
    return this.todos.reduce((acc, todo) => Number(todo.completed) + acc, 0);
  }

  onCompletedChange(todo: Todo, completed: boolean) {
    todo.completed = completed;
  }
}
