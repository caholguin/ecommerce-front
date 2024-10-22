import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFamilyComponent } from './add-edit-family.component';

describe('AddFamilyComponent', () => {
  let component: AddFamilyComponent;
  let fixture: ComponentFixture<AddFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFamilyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
