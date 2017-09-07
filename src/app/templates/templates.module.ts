import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AboutComponent } from './about/about.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MoleculesModule
  ],
  declarations: [HomeComponent, AboutComponent, PeopleComponent]
})
export class TemplatesModule { }
