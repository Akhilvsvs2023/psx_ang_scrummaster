import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { CreateTaskComponent } from './home/create-task/create-task.component';
import { TaskListComponent } from './home/task-list/task-list.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TokenGuard } from './services/tokenGaurd.service';
import { ProfileComponent } from './home/profile/profile.component';
import { ApproveRequestsComponent } from './home/approve-requests/approve-requests.component';
import { RequestsComponent } from './home/requests/requests.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"createUser", component:CreateUserComponent},
  {path:"", component:HomeComponent,canActivate:[TokenGuard],canActivateChild:[TokenGuard],children:[
    {path:"createTask", component:CreateTaskComponent},
    {path:"taskList", component:TaskListComponent},
    {path:"statistics", component:StatisticsComponent},
    {path:"profile", component:ProfileComponent},
    {path:"myRequests", component:RequestsComponent},
    {path:"approveRequests", component:ApproveRequestsComponent}
  ]},
  {path:"**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
