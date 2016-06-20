import { Injectable } from '@angular/core';
// this is our example service!

@Injectable()
export class ExampleService {
  // let's make this service provide some data
  list: any[];

  constructor() {
    this.list = [];
  }
  addToList() {
    // this will provide a random integer on click
    this.list.push(Math.round(Math.random()*100));
  }
  getList() {
    return this.list;
  }
}
