import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteOverviewComponent } from './website-overview.component';

describe('WebsiteOverviewComponent', () => {
  let component: WebsiteOverviewComponent;
  let fixture: ComponentFixture<WebsiteOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteOverviewComponent]
    });
    fixture = TestBed.createComponent(WebsiteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
