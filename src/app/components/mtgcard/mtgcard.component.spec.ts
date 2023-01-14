import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardComponent } from './mtgcard.component';

describe('MtgcardComponent', () => {
  let component: MtgcardComponent;
  let fixture: ComponentFixture<MtgcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
