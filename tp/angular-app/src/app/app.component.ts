import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Todo, WebapiService } from "./webapi.service";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [],
})
export class AppComponent {
  pageNumber = 1;
}
