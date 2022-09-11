import {Component} from '@angular/core';
import {IResume, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'contact-sidebar',
    templateUrl: './contact-sidebar.component.html',
    styleUrls: ['./contact-sidebar.component.scss']
})
export class ContactSidebarComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
