import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinesComponent } from './spines.component';

describe('SpinesComponent', () => {
  let component: SpinesComponent;
  let fixture: ComponentFixture<SpinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
