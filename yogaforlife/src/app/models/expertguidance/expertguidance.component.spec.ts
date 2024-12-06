import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertguidanceComponent } from './expertguidance.component';

describe('ExpertguidanceComponent', () => {
  let component: ExpertguidanceComponent;
  let fixture: ComponentFixture<ExpertguidanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertguidanceComponent]
    });
    fixture = TestBed.createComponent(ExpertguidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
