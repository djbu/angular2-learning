import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit,
AfterViewChecked, AfterContentInit, AfterContentChecked, AfterContentInit {

  constructor() { }

  @Input() bindable = 1000;

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');

  }

  ngOnChanges() {
    this.log('ngOnChanges');

  }

  ngOnDestroy() {
    this.log('ngOnDestroy');

  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');

  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  private log(hook: string) {
    console.log(hook);
  }

}
