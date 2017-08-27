import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantHireMeComponent } from './want-hire-me.component';

describe('WantHireMeComponent', () => {
  let component: WantHireMeComponent;
  let fixture: ComponentFixture<WantHireMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantHireMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantHireMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
