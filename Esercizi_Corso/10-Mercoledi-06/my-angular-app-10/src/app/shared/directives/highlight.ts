import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#f4f4f4');
    this.renderer.setStyle(this.el.nativeElement, 'padding', '2px 4px');
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '4px');
  }
}
