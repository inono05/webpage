import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-live-logs',
  standalone: true,
  imports: [],
  templateUrl: './live-logs.html',
  styleUrls: ['./live-logs.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveLogs implements OnInit, OnDestroy {
  logs: string[] = [];
  private sub?: Subscription;
  private readonly MAX_LOGS = 200;

  @ViewChild('logContainer') private logContainer!: ElementRef<HTMLDivElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.sub = interval(2000).pipe(
      catchError(error => {
        console.error('Error in log generation:', error);
        return [];
      })
    ).subscribe({
      next: (i) => {
        const event = `${new Date().toLocaleTimeString()} — event#${i} — ${Math.random() > 0.5 ? 'INFO' : 'WARN'}`;

        // Create new array reference for OnPush
        this.logs = [...this.logs, event].slice(-this.MAX_LOGS);

        // Manually trigger change detection
        this.cdr.detectChanges();

        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => this.scrollToBottom());
      },
      error: (err) => console.error('Log subscription error:', err)
    });
  }

  private scrollToBottom(): void {
    if (this.logContainer?.nativeElement) {
      const element = this.logContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}

