import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { AboutModule } from './modules/about/about.module';
import { EducationModule } from './modules/education/education.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { SharedModule } from './modules/shared/shared.module';
import { ContactModule } from './modules/contact/contact.module';
import {ProfilesModule} from './modules/profiles/profiles.module';
import {ProjectsModule} from './modules/projects/projects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AboutModule,
    EducationModule,
    ExperienceModule,
    ContactModule,
    ProfilesModule,
    ProjectsModule,
    SharedModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
