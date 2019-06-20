import {
  AfterContentInit, AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // this is default, the others are None and Native
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
  /* Making our own custom property for this element*/
  /* Can make alias ->Input('alias name here') */
  @Input() element: { type: string, name: string, content: string };
  /* ViewChild references a template */
  @ViewChild('heading') header: ElementRef;
  /* View content references the content */
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('ngOnInit Text content=> ' + this.header.nativeElement.textContent);
    console.log('ngOnInit Paragraph content=> ' + this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterViewInit Text content=> ' + this.header.nativeElement.textContent);
    console.log('ngAfterContentInit Paragraph content=> ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Text content=> ' + this.header.nativeElement.textContent);
    console.log('ngAfterViewInit Paragraph content=> ' + this.paragraph.nativeElement.textContent);

  }
}
