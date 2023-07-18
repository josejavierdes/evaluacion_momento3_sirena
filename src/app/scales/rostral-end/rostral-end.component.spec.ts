import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RostralEndComponent } from './rostral-end.component';

describe('RostralEndComponent', () => {
  let component: RostralEndComponent;
  let fixture: ComponentFixture<RostralEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RostralEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RostralEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
