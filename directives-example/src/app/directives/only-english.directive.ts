import { Directive, HostBinding, OnInit, HostListener } from '@angular/core';
@Directive({
  selector: 'input[type="text"][appOnlyEnglish]'
})
export class OnlyEnglishDirective implements OnInit {
  @HostBinding('class.not-english')
  isNotEnglish = false;

  @HostListener('keypress', ['$event'])
  onTextChanged(e: KeyboardEvent): void {
    const c = e.key.toUpperCase();

    if ((c < 'A') || (c > 'Z')) {
      this.isNotEnglish = true;
    }
  }

  public ngOnInit(): void {
  }
}
