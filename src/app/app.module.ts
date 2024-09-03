import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule} from '@angular/material/table';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CreateTaskComponent } from './home/create-task/create-task.component';
import { TaskListComponent } from './home/task-list/task-list.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { WebsiteOverviewComponent } from './login/website-overview/website-overview.component';
import { CreateUserformComponent } from './create-user/create-userform/create-userform.component';
import { ToastrModule } from 'ngx-toastr';
import { TokenGuard } from './services/tokenGaurd.service';
import { ProfileComponent } from './home/profile/profile.component';
import { ApproveRequestsComponent } from './home/Request/approve-requests/approve-requests.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import { MyRequestsComponent } from './home/Request/my-requests/my-requests.component';
import { ProjectComponent } from './home/project/project.component';
import { CreateProjectComponent } from './home/project/create-project/create-project.component';
// import { TokenInterceptor } from './services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateUserComponent,
    HomeComponent,
    ErrorComponent,
    LoginFormComponent,
    NavbarComponent,
    CreateTaskComponent,
    TaskListComponent,
    StatisticsComponent,
    WebsiteOverviewComponent,
    CreateUserformComponent,
    ProfileComponent,
    ApproveRequestsComponent,
    DashboardComponent,
    MyRequestsComponent,
    ProjectComponent,
    CreateProjectComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 1000,maxOpened:3,autoDismiss:true}),
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    // {
    // provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor,
    // multi:true
    // },
  TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
