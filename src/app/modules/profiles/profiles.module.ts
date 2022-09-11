import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProfilesSidebarComponent} from './components/profiles-sidebar/profiles-sidebar.component';
import {ProfilesFooterComponent} from './components/profiles-footer/profiles-footer.component';

@NgModule({
    imports: [
      CommonModule,
      SharedModule
    ],
    declarations: [
      ProfilesSidebarComponent,
      ProfilesFooterComponent
    ],
    exports: [
      ProfilesSidebarComponent,
      ProfilesFooterComponent
    ]
})
export class ProfilesModule { }
