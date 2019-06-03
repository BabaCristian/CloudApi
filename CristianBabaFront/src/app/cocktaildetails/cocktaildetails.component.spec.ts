import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktaildetailsComponent } from './cocktaildetails.component';

describe('CocktaildetailsComponent', () => {
  let component: CocktaildetailsComponent;
  let fixture: ComponentFixture<CocktaildetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktaildetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktaildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
