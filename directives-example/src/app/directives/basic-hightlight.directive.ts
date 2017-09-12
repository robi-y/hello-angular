import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elemRef: ElementRef,
              private renderer: Renderer2) {
  }

  // tslint:disable-next-line:no-input-rename
  @Input('appBasicHighlight')
  highlightColor = 'lightBlue';

  // tslint:disable-next-line:no-input-rename
  @Input('off')
  offColor = 'transparent';

  @HostBinding('style.backgroundColor')
  background = this.offColor;

  @HostListener('mouseenter')
  onUserHover(eventData: Event): void {
    this.background = this.highlightColor;
  }

  @HostListener('mouseleave')
  onUserExit(eventData: Event): void {
    this.background = this.offColor;
  }

  public ngOnInit(): void {
    this.background = this.offColor;
  }
}
