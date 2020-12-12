import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

// import 'lodash';
// declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  name = 'Maikl';

  hiGay() {
    return `Hello, ${this.name}! `;
  }

  // title = 'Lodash';
  // obj = {id: 1, age: 45, name: 'Maikl'};
  // newObj: Array<any> = [];
  // arrObj = [{id: 1, age: 45}, {id: 2, age: 20}, {id: 3, age: 43}];
  // arrObjFilter = [
  //   {id: 1, name: 'foo'},
  //   {id: 2, name: 'fo'},
  //   {id: 3, name: 'bar'}
  // ];
  // arrNum = [5, 1, 3, 41, 6, 8, 9, 11, 5, 41,];
  //
  // users = [
  //   {user: 'barney', age: 36, active: true},
  //   {user: 'fred', age: 40, active: false}
  // ];
  //
  // ngOnInit(): void {
  //
  //   // _.each
  //   _.each(this.obj, (item, index) => {
  //     this.newObj.push(index);
  //   });
  //   // _.map
  //   const aO = _.map(this.arrObj, 'age');
  //   // _.filter (выбирает то что не подпадает под условие)
  //   const aN1 = _.filter(this.arrObjFilter, item => {
  //     return item.id !== 2;
  //   });
  //   // _.reject (удаляет что задано по условию)
  //   const aN = _.reject(this.arrObjFilter, {id: 2});
  //   // _.find
  //   const aN2 = _.find(this.arrObjFilter, {id: 2});
  //   // _.without (не удаляет объекты из массиваб не принимает вторым аргументом функцию)
  //   const withoutAr = _.without(this.arrNum, 5, 41, 3);
  //   // _.remove
  //   // const rem = _.remove(this.arrObjFilter, item => {
  //   //   return item.id === 2;
  //   // });
  //   // _.reduce
  //   const reduce = _.reduce([1, 2, 3, 4, 5], (memo, item) => {
  //     return memo + item;
  //   }, 0);
  //   const re = _.reduce([{id: 1, name: 'foo'}], (memo: any, item): any => {
  //     if (item.name === 'foo') {
  //       memo.push(item.id);
  //     }
  //     return memo;
  //   }, []);
  //
  //   // _.every выполняется ли условие ко всем елементам массива
  //   const every = _.every(this.users, 'active');
  //
  //   // some выполняется ли условие хотябы к одному елементу массива
  //   const some = _.some([
  //     {name: 'foo', isActive: false},
  //     {name: 'bar', isActive: false}
  //     ], item => {
  //     return item.isActive;
  //   });
  //
  //   // sortBy
  //   const sort = _.sortBy([
  //     {name: 'Fred', likes: 10},
  //     {name: 'John', likes: 20},
  //     {name: 'Alex', likes: 1}
  //     ], item => {
  //     return item.name;
  //   });
  //   const sort1 = _.sortBy([
  //     {name: 'Fred', likes: 10},
  //     {name: 'John', likes: 2},
  //     {name: 'Alex', likes: 30}
  //   ], 'likes');
  //
  //   // _.groupBy
  //   // const group = _.groupBy([
  //   //   {name: 'user1', isActive: true},
  //   //   {name: 'user2', isActive: true},
  //   //   {name: 'user3', isActive: false}
  //   //   ], item => {
  //   //   return item.isActive;
  //   // });
  //
  //   const group1 = _.groupBy([
  //     {name: 'user1', isActive: true},
  //     {name: 'user2', isActive: true},
  //     {name: 'user3', isActive: false}
  //   ], 'isActive');
  //
  //   console.log(group1);
  // }
  //



}
