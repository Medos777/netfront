import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoisirComponent } from './add-loisir.component';

describe('AddLoisirComponent', () => {
  let component: AddLoisirComponent;
  let fixture: ComponentFixture<AddLoisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLoisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
