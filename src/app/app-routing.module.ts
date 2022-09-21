import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/main-page/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./features/todo-list/todo-list.module').then(m => m.TodoListModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
