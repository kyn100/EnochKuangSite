import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLocationMapComponent } from './work-location-map.component';

describe('WorkLocationMapComponent', () => {
  let component: WorkLocationMapComponent;
  let fixture: ComponentFixture<WorkLocationMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLocationMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
