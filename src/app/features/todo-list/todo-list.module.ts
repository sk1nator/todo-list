import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list.component';
import { TodolistRoutingModule } from './todo-list.routing.module';



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodolistRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoListModule { }
