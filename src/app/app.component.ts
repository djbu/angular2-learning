import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
  <h1>Este es un inline</h1>
    
  <app-lifecycle *ngIf="!delete"></app-lifecycle>    
  <button (click) = "delete = true">Delete</button>
  `,
  styles: [`
  h1 {
    color: red;
  }
  `],
    
})
export class AppComponent {
  delete = false;
}
