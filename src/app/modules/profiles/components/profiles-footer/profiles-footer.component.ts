import {Component} from '@angular/core';
import {IResume, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'profiles-footer',
    templateUrl: './profiles-footer.component.html',
    styleUrls: ['./profiles-footer.component.scss']
})
export class ProfilesFooterComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
