import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MATERIAL_MODULES } from "../shared/material-modules";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [
    CommonModule,
    MATERIAL_MODULES.Toolbar,
    MATERIAL_MODULES.Icon,
    MATERIAL_MODULES.Button,
  ],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}
