import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
})
export class TodoComponent implements OnInit {
  @Input() completed = false;
  @Input() title = "";
  @Output() completedChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onChange(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this.completedChange.emit(checked);
  }
}
