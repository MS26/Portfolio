import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroductionComponent} from './components/introduction/introduction.component';
import {OverviewComponent} from './components/overview/overview.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
      IntroductionComponent,
      OverviewComponent
    ],
    exports: [
      IntroductionComponent,
      OverviewComponent
    ]
})
export class AboutModule { }
