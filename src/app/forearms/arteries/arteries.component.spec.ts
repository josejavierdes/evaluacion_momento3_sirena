import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteriesComponent } from './arteries.component';

describe('ArteriesComponent', () => {
  let component: ArteriesComponent;
  let fixture: ComponentFixture<ArteriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArteriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArteriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
