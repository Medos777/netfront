import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListloisirComponent } from './listloisir.component';

describe('ListloisirComponent', () => {
  let component: ListloisirComponent;
  let fixture: ComponentFixture<ListloisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListloisirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListloisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
