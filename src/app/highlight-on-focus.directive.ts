import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocusDirective {
  @Input() highlightColor: string = 'lightyellow';

  private originalBackgroundColor: string;

  constructor(private el: ElementRef) {
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('focus') onFocus() {
    this.highlight(this.highlightColor);
  }

  @HostListener('blur') onBlur() {
    this.highlight(this.originalBackgroundColor);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
