import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRequestsComponent } from './approve-requests.component';

describe('ApproveRequestsComponent', () => {
  let component: ApproveRequestsComponent;
  let fixture: ComponentFixture<ApproveRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveRequestsComponent]
    });
    fixture = TestBed.createComponent(ApproveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
