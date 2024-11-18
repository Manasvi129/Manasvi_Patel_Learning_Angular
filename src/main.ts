import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {importProvidersFrom} from "@angular/core";
import {InMemoryDataService} from "./app/in-memory-data-service.service";

// Bootstrap the application with the AppComponent and router configuration
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideHttpClient(),importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1}))]
});
