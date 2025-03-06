import { Component } from '@angular/core';
import { ChartsComponent } from './charts/charts.component';


@Component({
  selector: 'app-root',
  imports: [ChartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application';
}
