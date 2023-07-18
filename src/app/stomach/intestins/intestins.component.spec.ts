import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntestinsComponent } from './intestins.component';

describe('IntestinsComponent', () => {
  let component: IntestinsComponent;
  let fixture: ComponentFixture<IntestinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntestinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntestinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
