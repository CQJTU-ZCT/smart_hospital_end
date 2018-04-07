import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { Select2Module } from 'ng4-select2';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatDoctorComponent } from './chat-doctor/chat-doctor.component';
import { InTimeChartComponent } from './in-time-chart/in-time-chart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FindPasswordPageComponent } from './find-password-page/find-password-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmailTipComponent } from './email-tip/email-tip.component';
import { ResetPawdComponent } from './reset-pawd/reset-pawd.component';
import { FooterLightComponent } from './footer-light/footer-light.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DoctorManageComponent } from './doctor-manage/doctor-manage.component';
import { CarManageComponent } from './car-manage/car-manage.component';
import { PaySysComponent } from './pay-sys/pay-sys.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { ListViwComponent } from './list-viw/list-viw.component';
import {DoctorService} from "./doctor.service";
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';

const appRoutes: Routes = [
  { path: 'find', component: FindPasswordPageComponent },
  { path: 'tip', component: EmailTipComponent },
  { path: 'reset', component: ResetPawdComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'doctor', component: DoctorManageComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ChatDoctorComponent,
    InTimeChartComponent,
    FooterComponent,
    LoginPageComponent,
    FindPasswordPageComponent,
    ErrorPageComponent,
    EmailTipComponent,
    ResetPawdComponent,
    FooterLightComponent,
    ContactPageComponent,
    DoctorManageComponent,
    CarManageComponent,
    PaySysComponent,
    UserCenterComponent,
    NavVerticalComponent,
    ListViwComponent,
    DoctorInfoComponent,
    AddDoctorComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes
    ),
    BrowserModule,
    FormsModule,
    Select2Module
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
