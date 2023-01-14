import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtgcardsComponent } from './mtgcards.component';

describe('MtgcardsComponent', () => {
  let component: MtgcardsComponent;
  let fixture: ComponentFixture<MtgcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtgcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MtgcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
