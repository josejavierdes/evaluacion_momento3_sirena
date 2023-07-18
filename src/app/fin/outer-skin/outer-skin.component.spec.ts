import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterSkinComponent } from './outer-skin.component';

describe('OuterSkinComponent', () => {
  let component: OuterSkinComponent;
  let fixture: ComponentFixture<OuterSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterSkinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
