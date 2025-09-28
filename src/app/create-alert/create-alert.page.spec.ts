import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateAlertPage } from './create-alert.page';

describe('CreateAlertPage', () => {
  let component: CreateAlertPage;
  let fixture: ComponentFixture<CreateAlertPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(CreateAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});