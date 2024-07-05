import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';
import { TodoListComponent} from './pages/todo-list/todo-list.component'
import { Component } from '@angular/core';

export const routes: Routes = [
   { path :'',
    component:HomeComponent},
   { path :'labs',
    component:LabsComponent},
    { path :'todo',
    component:TodoListComponent},
];
