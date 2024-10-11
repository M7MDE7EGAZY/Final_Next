import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDestComponent } from './top-dest.component';

describe('TopDestComponent', () => {
  let component: TopDestComponent;
  let fixture: ComponentFixture<TopDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopDestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
