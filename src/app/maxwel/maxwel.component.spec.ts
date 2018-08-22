import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxwelComponent } from './maxwel.component';

describe('MaxwelComponent', () => {
  let component: MaxwelComponent;
  let fixture: ComponentFixture<MaxwelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxwelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxwelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
