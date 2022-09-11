import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'button[buttonOutlined], a[buttonOutlined]',
    template: '<ng-content></ng-content>',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'button button-outlined',
    }
})
export class ButtonOutlinedComponent {
}