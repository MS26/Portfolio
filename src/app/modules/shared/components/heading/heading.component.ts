import {Component, Input} from '@angular/core';

@Component({
    selector: 'heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
    @Input() public header: string;
}
