import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './userPipes/search.pipe';
import { FilterPipe } from './userPipes/filter.pipe';
import { SortPipe } from './userPipes/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent,
    AddUserComponent,
    EditUserComponent,
    SearchPipe,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
   
    HttpClientModule,
    NgxPaginationModule,
    FormsModule


  ]
})
export class UsersModule { }
