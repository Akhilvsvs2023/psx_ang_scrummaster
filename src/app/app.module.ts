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
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
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
import { ApproveRequestsComponent } from './home/approve-requests/approve-requests.component';
import { RequestsComponent } from './home/requests/requests.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
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
    RequestsComponent,
    DashboardComponent
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
    MatRadioModule,
    MatSelectModule,
    MatNativeDateModule
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
