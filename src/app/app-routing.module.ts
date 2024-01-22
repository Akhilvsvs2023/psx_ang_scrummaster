import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CreateTaskComponent } from './home/create-task/create-task.component';
import { TaskListComponent } from './home/task-list/task-list.component';
import { StatisticsComponent } from './home/statistics/statistics.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", component:HomeComponent},
  {path:"createUser", component:CreateUserComponent},
  {path:"", component:HomeComponent,children:[
    {path:"createTask", component:CreateTaskComponent},
    {path:"taskList", component:TaskListComponent},
    {path:"statistics", component:StatisticsComponent}
  ]},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
