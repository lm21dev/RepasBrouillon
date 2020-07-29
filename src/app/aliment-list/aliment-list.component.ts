import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Aliment } from '../classes/aliment';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.css']
})
export class AlimentListComponent implements OnInit {

  @Output() clickAdd = new EventEmitter();
  aliments: Aliment[] = [];
  alimentsAffiche: Aliment[]=[];
  private _filtre: string;

  @Input() public set filtre(filtre: string){
    this._filtre = filtre;
    this.alimentsAffiche.splice(0);
    if(this.filtre){
      for (var i = 0; i < this.aliments.length; i++){
        if (this.aliments[i].contains(this.filtre)){
          this.alimentsAffiche.push(this.aliments[i]);
        }
      }
    }else{
      for (var i =0; i<this.aliments.length; i++){
        this.alimentsAffiche.push(this.aliments[i]);
    }
    }
  }
  public get filtre(): string{
    return this._filtre;
  }
  
  constructor() {
    this.aliments =
    [
      new Aliment('Poulet'),
      new Aliment('Riz'),
      new Aliment('Pâtes'),
      new Aliment('Macarron Vanille')
    ];
  }

  ngOnInit(): void {
  }
  onAddClick(index:number):void{
    this.clickAdd.emit({aliment:this.alimentsAffiche[index]});
  }
}
