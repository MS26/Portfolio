import {Component} from '@angular/core';
import {IResume, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'profiles-sidebar',
    templateUrl: './profiles-sidebar.component.html',
    styleUrls: ['./profiles-sidebar.component.scss']
})
export class ProfilesSidebarComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
