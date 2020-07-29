import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle-vie',
  templateUrl: './cycle-vie.component.html',
  styleUrls: ['./cycle-vie.component.css']
})
export class CycleVieComponent implements OnInit {

  data: string;
  display: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
