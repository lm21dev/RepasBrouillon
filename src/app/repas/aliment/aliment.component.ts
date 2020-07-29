import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aliment } from 'src/app/classes/aliment';
import { AlimentListComponent } from 'src/app/aliment-list/aliment-list.component';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.css']
})
export class AlimentComponent implements OnInit {

  @Input() aliment: Aliment;
  @Input() index: number;
  @Output() delete = new EventEmitter();
  detail: Boolean = false;
  quantite: number;
  constructor() { }

  ngOnInit(): void {
    this.quantite = this.aliment.quantite;
  }
  onDelete(): void{
    this.delete.emit({index : this.index});
  }
  clickAliment(event: any): void {
    if (event.target.tagName === 'INPUT'){
      
    }else
    if (this.detail){
      this.detail = false;
    }else{
      this.detail = true;
    }
  }
  inputKeyUp(key: any){
    if(key===13){
      this.aliment.quantite = this.quantite;
    }
  }
 
}
