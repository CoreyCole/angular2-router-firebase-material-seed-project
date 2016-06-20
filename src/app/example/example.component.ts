import { Component, OnInit } from '@angular/core';
// we want to use an <md-list> to display objects so let's import it
import { MdList, MdListItem } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';

// we globally provided our service earlier, now let's use it
import { ExampleService } from '../example.service';

@Component({
  moduleId: module.id,
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  directives: [MdList, MdListItem, MdButton] // lets tell our app were using the things we imported
})

// this is the component class that is exported from this file, you must reference this file and IMPORT it to use the class
export class ExampleComponent implements OnInit {
  // lets make this component have a list of strings
  list: string[];
  providedList: any[];
  // only use the constructor for passing in parameters for data and services
  // now that we are using a service (ExampleService which was globally provided)
  // pass it into the constructor, declare it private so the whole class can use it
  constructor(private exampleService: ExampleService) {}

  ngOnInit() {
    // this happens when the window intializes
    // tiny typescript lesson!
    // initialize `list`
    this.list = [];
    let dudes = ["Bill", "Bob", "Ben"];
    // to use a for you need to use the following format
    for (let dude of dudes) {
      // the `of` statement is how we do things in TS [NOT IN]
      this.list.push(dude);
    }
    // here we pull data in with a service
    this.providedList = this.exampleService.getList();
  }

  // add to our provided list on click
  buttonClick() {
    this.exampleService.addToList();
  }

}
