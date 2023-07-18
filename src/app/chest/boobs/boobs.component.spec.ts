import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoobsComponent } from './boobs.component';

describe('BoobsComponent', () => {
  let component: BoobsComponent;
  let fixture: ComponentFixture<BoobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoobsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
