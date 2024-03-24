import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: "app",
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
