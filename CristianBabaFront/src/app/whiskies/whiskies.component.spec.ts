import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiskiesComponent } from './whiskies.component';

describe('WhiskiesComponent', () => {
  let component: WhiskiesComponent;
  let fixture: ComponentFixture<WhiskiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhiskiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
