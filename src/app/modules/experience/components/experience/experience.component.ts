import {Component} from '@angular/core';
import {IResume, IResumeWork, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
