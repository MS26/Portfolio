import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './components/contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {ContactSidebarComponent} from './components/contact-sidebar/contact-sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
      ContactComponent,
      ContactSidebarComponent
    ],
    exports: [
      ContactComponent,
      ContactSidebarComponent
    ]
})
export class ContactModule { }
