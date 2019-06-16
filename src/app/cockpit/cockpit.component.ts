import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  /* Creating new events. Sending data out of the component*/
  @Output() serverCreated = new EventEmitter < {serverName: string, serverContent: string} >();
  @Output() blueprintCreated = new EventEmitter < {serverName: string, serverContent: string} >();

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput;
  // or an entire component
  @ViewChild(CockpitComponent) cockpitComponent;

  constructor() {
  }

  /* a lifecycle hook */
  ngOnInit() {
  }

  onAddServer() {
    // console.log(this.cockpitComponent);
    // console.log('');
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
  this.blueprintCreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
    });
  }
}
