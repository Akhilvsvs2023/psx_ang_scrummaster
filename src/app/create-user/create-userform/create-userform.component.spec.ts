import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserformComponent } from './create-userform.component';

describe('CreateUserformComponent', () => {
  let component: CreateUserformComponent;
  let fixture: ComponentFixture<CreateUserformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUserformComponent]
    });
    fixture = TestBed.createComponent(CreateUserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
