import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MATERIAL_MODULES } from "../shared/material-modules";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    MATERIAL_MODULES.Button,
    MATERIAL_MODULES.Card,
    MATERIAL_MODULES.Icon,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
