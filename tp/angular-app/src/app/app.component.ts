import { Component } from "@angular/core";
import { Todo, WebapiService } from "./webapi.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  title = "angular-app";
  monBoutonDisabled = false;
  todos: Todo[] = [];

  constructor(webapi: WebapiService) {
    this.todos = webapi.getTodos();
  }

  onClick(name: string) {
    alert(`Hallo ${name}`);
  }
}
