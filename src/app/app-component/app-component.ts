import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-app-component',
  standalone: true,
  styleUrl: './app-component.scss',
  template: `<h1>Hello World!</h1>`,
})
export class AppComponent {}
