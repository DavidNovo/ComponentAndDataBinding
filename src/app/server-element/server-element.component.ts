import {AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is default, the others are None and Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  /* Making our own custom property for this element*/
  /* Can make alias ->Input('alias name here') */
  @Input() element: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }
}
