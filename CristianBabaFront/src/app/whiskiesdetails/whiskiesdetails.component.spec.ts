import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskiesdetailsComponent } from './whiskiesdetails.component';

describe('WhiskiesdetailsComponent', () => {
  let component: WhiskiesdetailsComponent;
  let fixture: ComponentFixture<WhiskiesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskiesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskiesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
