import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-knowledgebase',
  imports: [
    FormsModule,
  ],
  templateUrl: './knowledgebase.html',
  styleUrl: './knowledgebase.css',
})
export class Knowledgebase {
  markdown: string = '### Example\nWrite your content here...';
  preview: boolean = false;

  save() {
    localStorage.setItem('kb-draft', this.markdown);
    alert('Draft saved!');
  }

  ngOnInit() {
    const saved = localStorage.getItem('kb-draft');
    if (saved) this.markdown = saved;
  }
}
