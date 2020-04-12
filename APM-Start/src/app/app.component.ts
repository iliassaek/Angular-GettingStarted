import { Component } from '@angular/core';

@Component({
  selector : 'pm-root' ,
  template : `
    <div><h1>{{pageTitle}}</h1>
      <div>This makes a component<div>
    </div>
  `
})
export class AppComponent {
  pageTitle : String = 'page Title'
}