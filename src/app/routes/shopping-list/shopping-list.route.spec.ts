import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListRoute } from './shopping-list.route';

describe('ShoppingListRoute', () => {
  let component: ShoppingListRoute;
  let fixture: ComponentFixture<ShoppingListRoute>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListRoute ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
