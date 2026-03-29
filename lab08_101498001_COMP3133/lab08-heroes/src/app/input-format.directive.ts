import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[input-format]',
  standalone: true,
})
export class InputFormatDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur')
  onBlur(): void {
    const input = this.el.nativeElement;
    input.value = input.value.toUpperCase();
  }
}
