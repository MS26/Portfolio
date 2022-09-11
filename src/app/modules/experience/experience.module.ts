import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExperienceComponent} from './components/experience/experience.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
      ExperienceComponent
    ],
    exports: [
      ExperienceComponent
    ]
})
export class ExperienceModule { }
