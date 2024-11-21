import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @Input() highlightColor: string = 'blue';
  @Input() textColor: string = '';

  private originalBackgroundColor: string;
  private originalTextColor: string;

  constructor(private el: ElementRef) {
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.originalTextColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor, this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.originalBackgroundColor, this.originalTextColor);
  }

  private highlight(backgroundColor: string, textColor: string) {
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    if (textColor) {
      this.el.nativeElement.style.color = textColor;
    }
  }
}
