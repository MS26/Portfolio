import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectsComponent} from './components/projects/projects.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
      ProjectsComponent
    ],
    exports: [
      ProjectsComponent
    ]
})
export class ProjectsModule { }
