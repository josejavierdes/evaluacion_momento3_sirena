import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalHairComponent } from './external-hair.component';

describe('ExternalHairComponent', () => {
  let component: ExternalHairComponent;
  let fixture: ComponentFixture<ExternalHairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalHairComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalHairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
