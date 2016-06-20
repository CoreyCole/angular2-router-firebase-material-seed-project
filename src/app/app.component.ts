// this is your main component
// on the index.html it is referenced, and everything inside of this component is displayed through that
// this is the highest level component in your application

// these are the imports for the component
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdToolbar } from '@angular2-material/toolbar';


/// the @Component decoration is used to declare that this is a decoration
@Component({
  moduleId: module.id,
  selector: 'app-root', // this is your component is referenced in html, <app-root>
  templateUrl: 'app.component.html', // reference to the raw html for the component
  styleUrls: ['app.component.css'], // reference to the styling of the html listed above
  directives: [ROUTER_DIRECTIVES, MdIcon, MdButton, MdToolbar, MD_CARD_DIRECTIVES], // directives are objects such as <md-button> and what not
  providers: [MdIconRegistry] // a provider is usually where PERSISTENT data providers are declared, if you declare it here instead of main.ts a NEW INSTANCE will be created
})
export class AppComponent {
  title = 'Angular 2 Firebase Material Component Router Seed Project';
}
