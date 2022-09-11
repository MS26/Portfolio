import {Component} from '@angular/core';
import {IResume, IResumeWork, ResumeService} from '../../../shared/services/resume.service';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public readonly data: IResume;

    constructor(service: ResumeService) {
        this.data = service.data;
    }
}
