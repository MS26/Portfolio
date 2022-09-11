import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollerComponent} from './components/scroller/scroller.component';
import {ButtonOutlinedComponent} from './components/button/button.component';
import {HeadingComponent} from './components/heading/heading.component';

@NgModule({
    imports: [
      CommonModule
    ],
    declarations: [
      ScrollerComponent,
      ButtonOutlinedComponent,
      HeadingComponent
    ],
    exports: [
      ScrollerComponent,
      ButtonOutlinedComponent,
      HeadingComponent
    ]
})
export class SharedModule { }
