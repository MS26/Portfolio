import {Component} from '@angular/core';
import {IResume, IResumeWork, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
