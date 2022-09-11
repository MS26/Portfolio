import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EducationComponent} from './components/education/education.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
      EducationComponent
    ],
    exports: [
      EducationComponent
    ]
})
export class EducationModule { }
