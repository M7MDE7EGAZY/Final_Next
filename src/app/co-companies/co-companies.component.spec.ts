import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCompaniesComponent } from './co-companies.component';

describe('CoCompaniesComponent', () => {
  let component: CoCompaniesComponent;
  let fixture: ComponentFixture<CoCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoCompaniesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
