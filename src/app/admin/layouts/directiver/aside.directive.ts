import { Directive, HostListener, ElementRef } from '@angular/core';
import * as $ from 'jquery';
/**
* Allows the aside to be toggled via click.
*/
@Directive({
  selector: '.aside-menu-toggler',
})

export class AsideToggleDirectiveNew {
  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event'])
  toggleOpen() {
    let $hostElem = this.el.nativeElement; 
    $hostElem.classList.toggle("fa-caret-up");
    let $parentElem=$hostElem.parentNode.parentNode.parentNode;
    $($parentElem).find("mat-list").toggle(300);
  }
}
