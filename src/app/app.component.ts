import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver01', content: 'just a test'},
    {type: 'server', name: 'Testserver02', content: 'just a test'}];



}
