import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppComponent } from './app/app-component/app-component';

const routes = [
  { path: '', component: AppComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
