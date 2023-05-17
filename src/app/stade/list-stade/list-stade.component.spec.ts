import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStadeComponent } from './list-stade.component';

describe('ListStadeComponent', () => {
  let component: ListStadeComponent;
  let fixture: ComponentFixture<ListStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
