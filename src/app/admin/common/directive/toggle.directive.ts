import { Directive, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
/**
* Allows the aside to be toggled via click.
*/
@Directive({
  selector: '.toggler',
})

export class ToggleDirective {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  toggleOpen() {
    let $hostElem = this.el.nativeElement; 
    let $parentElem=$hostElem.parentNode;
    let $nowElem=$($parentElem).find("mat-nav-list");
    $nowElem.toggle(200);
    $nowElem.next().toggle(200);
  }
}
