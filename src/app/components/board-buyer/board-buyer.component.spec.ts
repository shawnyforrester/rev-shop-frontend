import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardBuyerComponent } from './board-buyer.component';

describe('BoardUserComponent', () => {
  let component: BoardBuyerComponent;
  let fixture: ComponentFixture<BoardBuyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardBuyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
