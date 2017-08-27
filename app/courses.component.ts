
import {Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h1>Courses</h1>
        <button class="btn btn-primary" [class.active]="isActive" (click)="onClick($event)">Save</button>
    `
})

export class CoursesComponent {
    isActive = true;

    onClick($event){
        alert($event.target.value);
    }
}