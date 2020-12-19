import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ChildExampleComponent} from '../child-example/child-example.component';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.scss']
})
export class ParentExampleComponent implements AfterViewInit {

  currentItem = 'From Parent example';

  show: boolean = (false);
  list = ['Jack', 'Alice', 'Michael'];
  eDate = new Date();

  text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis, cupiditate distinctio doloremque eaque, est expedita in nisi omnis perferendis placeat porro quisquam, recusandae reprehenderit suscipit voluptates. Aliquam, vitae.';

  @ViewChild(ChildExampleComponent)
  viewChild!: ChildExampleComponent;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.viewChild);
  }

  dataChangeHandler(message: any) {
    console.log(message);
  }

  showExzample() {
    this.show = !this.show;
  }
}
