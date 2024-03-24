import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app",
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
