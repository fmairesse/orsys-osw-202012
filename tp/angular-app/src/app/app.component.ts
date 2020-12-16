import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  title = "angular-app";
  monBoutonDisabled = false;
  todos = [
    {
      title: "Mon todo 1",
      completed: true,
    },
    {
      title: "Mon todo 2",
      completed: false,
    },
  ];

  onClick(name: string) {
    alert(`Hallo ${name}`);
  }
}
