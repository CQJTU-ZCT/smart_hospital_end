import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatDoctorComponent } from './chat-doctor/chat-doctor.component';
import { InTimeChartComponent } from './in-time-chart/in-time-chart.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FindPasswordPageComponent } from './find-password-page/find-password-page.component';

const appRoutes: Routes = [
  { path: 'find', component: FindPasswordPageComponent }
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
    FindPasswordPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
