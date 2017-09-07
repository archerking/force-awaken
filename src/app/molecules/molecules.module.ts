import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PeopleItemComponent } from './people-item/people-item.component';
import { PaginateComponent } from './paginate/paginate.component';
import { LoaderComponent } from './loader/loader.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { EditFormComponent } from './edit-form/edit-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [HeaderComponent, PeopleItemComponent, PaginateComponent, LoaderComponent, EditPeopleComponent, EditFormComponent],
  exports: [HeaderComponent, PeopleItemComponent, PaginateComponent, LoaderComponent, EditPeopleComponent, EditFormComponent],
  entryComponents: [EditPeopleComponent]
})
export class MoleculesModule { }
