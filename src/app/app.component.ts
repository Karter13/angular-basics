import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

// import 'lodash';
// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Lodash';
  obj = {id: 1, age: 45, name: 'Maikl'};
  newObj: Array<any> = [];
  arrObj = [{id: 1, age: 45}, {id: 2, age: 20}, {id: 3, age: 43}];
  arrObjFilter = [{id: 1, name: 'foo'}, {id: 2, name: 'fo'}, {id: 3, name: 'foo'}];

  arrNum = [5, 1, 3, 41, 6, 8, 9, 11, 5, 41,];

  ngOnInit(): void {

    // _.each
    _.each(this.obj, (item, index) => {
      this.newObj.push(index);
    });
    // _.map
    const aO = _.map(this.arrObj, 'age');
    // _.filter
    const aN = _.filter(this.arrObjFilter, {name: 'foo'});
    // _.find
    const aN2 = _.find(this.arrObjFilter, {id: 2});
    // _.without
    const withoutAr = _.without(this.arrNum, 5, 41, 3);

    console.log(withoutAr);
  }


}
