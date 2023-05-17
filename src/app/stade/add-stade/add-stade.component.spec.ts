import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStadeComponent } from './add-stade.component';

describe('AddStadeComponent', () => {
  let component: AddStadeComponent;
  let fixture: ComponentFixture<AddStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
