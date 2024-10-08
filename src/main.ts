import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";

// Bootstrap the application with the AppComponent and router configuration
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
