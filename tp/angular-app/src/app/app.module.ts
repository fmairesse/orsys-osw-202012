import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { TodoComponent } from "./todo/todo.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "page1", component: Page1Component },
  { path: "page2", component: Page2Component },
  { path: "", redirectTo: "page1", pathMatch: "full" },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TodoComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
