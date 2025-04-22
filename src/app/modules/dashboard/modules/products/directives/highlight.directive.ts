import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class HighlightDirective {
  constructor(private element: ElementRef) {
    console.log('HighlightDirective initialized', element);
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.fontSize = '20px';
  }
}
