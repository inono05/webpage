import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf} from '@angular/common';
interface Ticket { id:number; subject:string; status:'Open'|'In Progress'|'Closed'; createdAt: string; }

@Component({
  selector: 'app-ticket-viewer',
  imports: [
    FormsModule,
    NgForOf,
    NgClass
  ],
  templateUrl: './ticket-viewer.html',
  styleUrl: './ticket-viewer.css',
})
export class TicketViewer {
  filter: 'All'|'Open'|'In Progress'|'Closed' = 'All';

  tickets: Ticket[] = [
    { id: 1, subject: 'Login fails on mobile', status: 'Open', createdAt: '2025-11-25 10:12' },
    { id: 2, subject: 'Crash during upload', status: 'In Progress', createdAt: '2025-11-24 09:00' },
    { id: 3, subject: 'Feature request: dark mode', status: 'Closed', createdAt: '2025-11-20 12:01' },
  ];

  get filteredTickets() {
    if (this.filter === 'All') return this.tickets;
    return this.tickets.filter(t => t.status === this.filter);
  }
}
