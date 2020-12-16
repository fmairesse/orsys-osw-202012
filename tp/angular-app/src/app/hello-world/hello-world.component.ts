import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.scss"],
})
export class HelloWorldComponent implements OnInit {
  @Input() name = "World";

  constructor() {}

  ngOnInit(): void {}
}
