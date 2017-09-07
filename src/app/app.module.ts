import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplatesModule } from './templates/templates.module';
import { MoleculesModule } from './molecules/molecules.module';
import { ServicesModule } from './services/services.module';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { PeopleComponent } from './templates/people/people.component';
import { GetDataService } from './services/get-data.service';
import { ErrorResolverService } from './services/error-resolver.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TemplatesModule,
    MoleculesModule,
    ServicesModule,
    /**
     * TODO: Import as a seperate module.
     */
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'people/:pageid',
        component: PeopleComponent,
        resolve: {
          peopleItems: GetDataService
        }
      },
      {
        path:'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [{provide: ErrorHandler, useClass: ErrorResolverService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
