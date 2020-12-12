import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.scss']
})
export class ChildExampleComponent implements OnInit {

  @Input() title: string = ('Example');
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();

  label: string = ('Send massage');

  constructor() { }

  ngOnInit(): void {
  }

  sendMessages() {
    this.dataChanged.emit({
      msg: 'Message from ChildExample'
    });
  }
}
