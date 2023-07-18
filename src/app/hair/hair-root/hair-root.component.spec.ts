import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairRootComponent } from './hair-root.component';

describe('HairRootComponent', () => {
  let component: HairRootComponent;
  let fixture: ComponentFixture<HairRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairRootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
