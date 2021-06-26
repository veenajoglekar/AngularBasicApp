import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[app-highlight]'
})

export class HighlightDirective{

    constructor(private element: ElementRef){
        element.nativeElement.style.background='red';
    }
}