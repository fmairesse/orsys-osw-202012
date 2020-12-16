import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Todo, WebapiService } from "./webapi.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent implements OnDestroy {
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
}
