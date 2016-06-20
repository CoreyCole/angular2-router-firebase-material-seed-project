import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

// import the main component
import { AppComponent, environment } from './app/';

// angular 2 component router
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

// http dependency for loading CDN stylesheets
import { HTTP_PROVIDERS } from '@angular/http';

// firebase dependency
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

// here we are going to globally provide a service
import { ExampleService } from './app/example.service';

if (environment.production) {
  enableProdMode();
}

// this is the bootstrap!
// things added below are GLOBALLY provided to the application, simply append it the array below
// once that is done you do NOT need to add it as a PROVIDER in any controller, just import and pass to constructor
bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS, // angular 2 component router global directives
  ExampleService, // now our exampleService is globally provided! go to example.component to see it in use
  HTTP_PROVIDERS,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "<your-key>",
    authDomain: "<your-project-authdomain>",
    databaseURL: "<your-database-URL>",
    storageBucket: "<your-storage-bucket>",
  })
]);
