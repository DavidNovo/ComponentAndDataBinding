import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  /* Making our own custom property for this element*/
  /* Can make alias ->Input('alias name here') */
  @Input() element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit() {
  }

}
