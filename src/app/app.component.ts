import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {IResume, ResumeService} from "./modules/shared/services/resume.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private readonly _meta: Meta;
  private readonly _title: Title;
  private readonly _resume: IResume;

  constructor(meta: Meta, title: Title, resumeService: ResumeService) {
    this._meta = meta;
    this._title = title;
    this._resume = resumeService.data;
  }

  ngOnInit() {
    this._title.setTitle(`${this._resume.basics.name} - ${this._resume.basics.label}`);

    this._meta.addTags([
      { name: 'og:title', content: this._title.getTitle() },
      { name: 'twitter:title', content: this._title.getTitle() },

      { name: 'description', content: this._resume.basics.summary },
      { name: 'og:description', content: this._resume.basics.summary },
      { name: 'twitter:description', content: this._resume.basics.summary },

      { name: 'image', content: this._resume.basics.image.small },
      { name: 'og:image', content: this._resume.basics.image.small },
      { name: 'twitter:image', content: this._resume.basics.image.small },

      { name: 'og:url', content: this._resume.basics.website },

      { name: 'og:type', content: 'website' },

      { name: 'twitter:card', content: 'summary_large_image' },
    ]);
  }

  public scrollTo(overview: HTMLElement): void {
    overview.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
