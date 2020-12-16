import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.scss"],
})
export class HelloWorldComponent implements OnInit {
  @Input() name = "";
  @Input() boutonDisabled = true;
  @Output() clickButton = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  disBonjour() {
    // alert("Bonjour");
    this.clickButton.emit(this.name);
  }
}
