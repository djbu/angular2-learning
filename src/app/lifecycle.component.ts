import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit,
AfterViewChecked, AfterContentInit, AfterContentChecked, AfterContentInit {

  constructor() { }

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
