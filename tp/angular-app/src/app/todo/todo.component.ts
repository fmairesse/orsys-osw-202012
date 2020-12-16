import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
})
export class TodoComponent implements OnInit {
  @Input() completed = false;
  @Input() title = "";

  constructor() {}

  ngOnInit(): void {}
}
