import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
  <h1>Este es un inline</h1>
    
  <app-lifecycle *ngIf="!delete" [bindable] = "boundValue">
    <p>{{test}}</p>
  </app-lifecycle>    
  <button (click) = "delete = true" >Delete</button>
  <button (click) = "test = 'changed value' ">Change values</button>
  <button (click) = "boundValue = 2000 ">Change values binding</button>
  `,
  styles: [`
  h1 {
    color: red;
  }
  `],
    
})
export class AppComponent {
  delete = false;
  test = 'starting value';
  boundValue = 1000;
}
