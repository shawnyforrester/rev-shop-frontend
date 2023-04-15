import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRetailerComponent } from './board-retailer.component';

describe('BoardRetailerComponent', () => {
  let component: BoardRetailerComponent;
  let fixture: ComponentFixture<BoardRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRetailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
