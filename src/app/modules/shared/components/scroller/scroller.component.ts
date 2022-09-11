import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'scroller',
    templateUrl: './scroller.component.html',
    styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent {
    @Output() public readonly next: EventEmitter<void> = new EventEmitter<void>();
}
