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

const appRoutes: Routes = [
  { path: 'find', component: FindPasswordPageComponent },
  { path: 'tip', component: EmailTipComponent },
  { path: 'reset', component: ResetPawdComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
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
    ContactPageComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes
    ),
    BrowserModule,
    FormsModule,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
