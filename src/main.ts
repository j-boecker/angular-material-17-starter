import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideAnimationsAsync(),
  ],
});
