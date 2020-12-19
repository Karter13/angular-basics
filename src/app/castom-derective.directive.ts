import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCastomDerective]'
})
export class CastomDerectiveDirective {

  @Input() size = 2;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMousEnter() {
    this.setFontSize(this.size);
  }
  @HostListener('mouseleave') onMousLeave() {
    this.setFontSize(3);
  }
  setFontSize(size: number | string): void {
    this.el.nativeElement.style.fontSize = `${size}rem`;
  }

}
