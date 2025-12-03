import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-live-logs',
  imports: [
    NgForOf
  ],
  templateUrl: './live-logs.html',
  styleUrl: './live-logs.css',
})
export class LiveLogs implements OnInit, OnDestroy {

  logs: string[] = [];
  sub?: Subscription;

  @ViewChild('logContainer') logContainer!: ElementRef;

  ngOnInit() {
    this.sub = interval(2000).subscribe(i => {
      const event = `${new Date().toLocaleTimeString()} — event#${i} — ${(Math.random() > 0.5 ? 'INFO' : 'WARN')}`;
      this.logs.push(event);

      // keep last 200 logs
      if (this.logs.length > 200) this.logs.shift();

      setTimeout(() => this.scrollToBottom(), 10);
    });
  }

  private scrollToBottom() {
    if (this.logContainer) {
      const e = this.logContainer.nativeElement;
      e.scrollTop = e.scrollHeight;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}

