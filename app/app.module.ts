import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular2-chartjs';
import { AgmCoreModule } from '@agm/core';
import { MdComponentsModule } from "./md-components/md-components.module";
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { WorkExperiencesService } from "./services/work-experiences.service";
import { SkillsService } from "./services/skills.service";

import { CoursesComponent } from './courses.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkLocationMapComponent } from './work-location-map/work-location-map.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { MottoComponent } from './motto/motto.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutThisSiteComponent } from './about-this-site/about-this-site.component';
import { WantHireMeComponent } from './want-hire-me/want-hire-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WorkExperienceComponent,
    NavbarComponent,
    SkillsComponent,
    WorkLocationMapComponent,
    BasicInfoComponent,
    MottoComponent,
    KnowledgeBaseComponent,
    ContactMeComponent,
    AboutThisSiteComponent,
    WantHireMeComponent,
    MyResumeComponent,
    ClientLoginComponent,
    HomeComponent,
    HeroComponent,
    PortfolioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MdComponentsModule,
    ChartModule,
    RouterModule.forRoot([
      {  path: '',  component: HomeComponent   },
      {  path: 'KnowledgeBase',  component: KnowledgeBaseComponent  },
      {  path: 'ContactMe',  component: ContactMeComponent  },
      {  path: 'ClientLogin',  component: ClientLoginComponent },
      {  path: 'Portfolio',  component: PortfolioComponent  }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDD8b-QaYaHehYQeHTMMRJ4wUBbF1gcNv8'
    })
  ],
  providers: [ WorkExperiencesService, SkillsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
