import {Component} from '@angular/core';
import {IResume, IResumeWork, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
