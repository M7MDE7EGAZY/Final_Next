import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFollowComponent } from './subscribe-follow.component';

describe('SubscribeFollowComponent', () => {
  let component: SubscribeFollowComponent;
  let fixture: ComponentFixture<SubscribeFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeFollowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
