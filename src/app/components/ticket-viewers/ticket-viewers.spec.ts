import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewers } from './ticket-viewers';

describe('TicketViewers', () => {
  let component: TicketViewers;
  let fixture: ComponentFixture<TicketViewers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketViewers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketViewers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
