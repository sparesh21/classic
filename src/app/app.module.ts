import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Parallax, ParallaxConfig } from 'ngx-parallax';

import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ComingSoonComponent } from './templates/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ComingSoonComponent,
    Parallax  
  ],
  imports: [
    BrowserModule,
    routes,
	  AngularFontAwesomeModule,
	  NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
