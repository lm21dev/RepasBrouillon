import { Component, OnInit, Input } from '@angular/core';
import { Aliment } from '../classes/aliment';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.css']
})
export class RepasComponent implements OnInit {

  @Input() aliments: Aliment[];
  
  constructor() { }

  ngOnInit(): void {
  }
  delete(i: number): void{
    this.aliments.splice(i,1);
  }
 
}
