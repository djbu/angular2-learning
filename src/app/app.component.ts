import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  template: `
  <h1>Este es un inline</h1>
  <app-databinding></app-databinding>    
  `,
  styles: [`
  h1 {
    color: red;
  }
  `],
    
})
export class AppComponent {
  
}
