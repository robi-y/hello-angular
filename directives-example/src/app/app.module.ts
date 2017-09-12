import { MyCustomPipe } from './pipes/my-custom.pipe';
import { OnlyEnglishDirective } from './directives/only-english.directive';
import { BasicHighlightDirective } from './directives/basic-hightlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvensPipe } from './evens.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    OnlyEnglishDirective,
    MyCustomPipe,
    EvensPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
