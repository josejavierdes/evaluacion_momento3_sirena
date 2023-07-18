import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VainsComponent } from './vains.component';

describe('VainsComponent', () => {
  let component: VainsComponent;
  let fixture: ComponentFixture<VainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
