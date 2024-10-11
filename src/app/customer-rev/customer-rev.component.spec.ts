import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRevComponent } from './customer-rev.component';

describe('CustomerRevComponent', () => {
  let component: CustomerRevComponent;
  let fixture: ComponentFixture<CustomerRevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerRevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
