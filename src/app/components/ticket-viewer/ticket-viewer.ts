import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
interface Ticket { id:number; subject:string; status:'Open'|'In Progress'|'Closed'; createdAt: string; }

@Component({
  selector: 'app-ticket-viewer',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './ticket-viewer.html',
  styleUrl: './ticket-viewer.css',
})
export class TicketViewer {
  filter: 'All'|'Open'|'In Progress'|'Closed' = 'All';

  tickets: Ticket[] = [
    { id: 1, subject: 'Login fails on mobile', status: 'Open', createdAt: '2025-12-05 09:15' },
    { id: 2, subject: 'Crash during file upload', status: 'In Progress', createdAt: '2025-12-04 14:30' },
    { id: 6, subject: 'Profile picture upload fails', status: 'Closed', createdAt: '2025-12-05 08:05' },
    { id: 7, subject: 'API timeout errors', status: 'In Progress', createdAt: '2025-12-03 13:25' },
    { id: 8, subject: 'Mobile menu not collapsing', status: 'Open', createdAt: '2025-12-05 11:30' },
    { id: 9, subject: 'Export to PDF formatting issues', status: 'Closed', createdAt: '2025-12-02 15:40' },
    { id: 10, subject: 'Notification emails not sending', status: 'In Progress', createdAt: '2025-12-04 09:15' },
    { id: 11, subject: 'Search function not returning results', status: 'Open', createdAt: '2025-12-05 11:05' },
    { id: 12, subject: 'User role permissions issue', status: 'Closed', createdAt: '2025-12-01 10:30' },
  ];

  get filteredTickets() {
    if (this.filter === 'All') return this.tickets;
    return this.tickets.filter(t => t.status === this.filter);
  }
}
