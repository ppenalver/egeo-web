import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownToHtmlModule } from 'markdown-to-html-pipe';

import { SharedModule } from 'shared';
import { ChangelogComponent } from './changelog.component';
import { ChangelogService } from './changelog.service';
import { routing } from './changelog.routing';


@NgModule({
   imports: [CommonModule, routing, SharedModule, MarkdownToHtmlModule],
   declarations: [ChangelogComponent],
   providers: [ChangelogService]
})
export class ChangelogModule { }

