import { Component, signal } from '@angular/core';
import { PocComponent } from './modules/poc/poc.component';

@Component({
  selector: 'app-root',
  imports: [PocComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('queue-manager');
}
