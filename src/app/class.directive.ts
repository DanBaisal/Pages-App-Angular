import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 
    // this.element.nativeElement.style.backgroundColor = 'orange';
    // To access a DOM element with a custom directive, you must write nativeElement, otherwise it won't work
  }

  // Intercepting a Property Assignment
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classList.add(key);
      } else {
        this.element.nativeElement.classList.remove(key);
      }
    }
  }

}

// You can put both the selector and the property in one by putting the selector in [] and in the @Input