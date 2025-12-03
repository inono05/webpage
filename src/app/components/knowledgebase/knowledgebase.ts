import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MarkdownPipe} from 'ngx-markdown';

@Component({
  selector: 'app-knowledgebase',
  imports: [
    FormsModule,
    NgIf,
    MarkdownPipe
  ],
  templateUrl: './knowledgebase.html',
  styleUrl: './knowledgebase.css',
})
export class Knowledgebase {
  markdown: string = '### Exemple\nTapez du contenu ici...';
  preview: boolean = false;

  saveDraft() {
    localStorage.setItem('kb-draft', this.markdown);
    alert('Draft saved!');
  }

  ngOnInit() {
    const saved = localStorage.getItem('kb-draft');
    if (saved) this.markdown = saved;
  }
}
