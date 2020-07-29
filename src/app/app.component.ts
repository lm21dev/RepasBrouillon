import { Component, Input } from '@angular/core';
import { Aliment } from './classes/aliment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RepasBrouillon';
  aliments: Aliment[] = [];

  onClickAdd(event: any): void{
    this.aliments.push(event.aliment);
  }
}
