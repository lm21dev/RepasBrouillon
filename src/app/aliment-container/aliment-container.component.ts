import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aliment-container',
  templateUrl: './aliment-container.component.html',
  styleUrls: ['./aliment-container.component.css']
})
export class AlimentContainerComponent implements OnInit {

  @Output() _clickAdd = new EventEmitter();
  rechercher: string;
  constructor() { }

  ngOnInit(): void {
  }
  filtrage(event: any): void{
    this.rechercher = event.value;
  }
  
  clickAdd(event: any): void{
    this._clickAdd.emit(event);
  }
}
