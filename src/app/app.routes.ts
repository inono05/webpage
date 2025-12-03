import { Routes } from '@angular/router';

import { TicketViewer } from './components/ticket-viewer/ticket-viewer';
import { Knowledgebase } from './components/knowledgebase/knowledgebase';
import { LiveLogs } from './components/live-logs/live-logs';


export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketViewer },
  { path: 'knowledgebase', component: Knowledgebase },
  { path: 'logs', component: LiveLogs },
];
