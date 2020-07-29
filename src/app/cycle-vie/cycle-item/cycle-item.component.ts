import { Component, OnInit, OnChanges, SimpleChanges, Input,OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-cycle-item',
  templateUrl: './cycle-item.component.html',
  styleUrls: ['./cycle-item.component.css']
})
export class CycleItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() data: string;
  constructor() {
    console.log('COnstructeut :' + this.data);
   }
  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnchanges');
    console.log('Valeur :' + this.data);
  }

  ngOnInit(): void {
  }
  
}
