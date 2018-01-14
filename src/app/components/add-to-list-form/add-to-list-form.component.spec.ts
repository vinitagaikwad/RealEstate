import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToListFormComponent } from './add-to-list-form.component';

describe('AddListingFormComponent', () => {
  let component: AddToListFormComponent;
  let fixture: ComponentFixture<AddToListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddToListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
