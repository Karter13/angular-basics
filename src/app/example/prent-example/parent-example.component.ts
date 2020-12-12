import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ChildExampleComponent} from '../child-example/child-example.component';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.scss']
})
export class ParentExampleComponent implements AfterViewInit {

  currentItem = 'From Parent example';

  @ViewChild(ChildExampleComponent)
  viewChild!: ChildExampleComponent;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.viewChild);
  }

  dataChangeHandler(message: any) {
    console.log(message);
  }
}
