import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

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
import { DoctorService } from './services/doctor.service';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EventService } from './services/event.service';
import { GridviewComponent } from './gridview/gridview.component';
import { GridviewService } from './services/gridview.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { DoctorWorkspaceComponent } from './doctor-workspace/doctor-workspace.component';
import { ConfigService } from './services/config.service';

declare var require: any;

require('../../node_modules/jquery/dist/jquery.js');
require('../../node_modules/popper.js/dist/popper.js');
require('../../node_modules/bootstrap/dist/js/bootstrap.js');
require('../../node_modules/select2/dist/js/select2.js');
require('../../node_modules/handsontable/dist/handsontable.full.js');
require('../../node_modules/markdown/lib/markdown.js');

const appRoutes: Routes = [
  { path: 'find', component: FindPasswordPageComponent },
  { path: 'tip', component: EmailTipComponent },
  { path: 'reset', component: ResetPawdComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'doctor', component: DoctorManageComponent },
  { path: 'add-doctor', component: AddDoctorComponent, outlet: 'aux' },
  { path: 'car', component: CarManageComponent },
  { path: 'pay', component: PaySysComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'main', component: DoctorWorkspaceComponent },
  { path: '**', component: ErrorPageComponent }
];

const interact = require('interactjs');

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
    AddDoctorComponent,
    GridviewComponent,
    AboutUsComponent,
    HelpComponent,
    DoctorWorkspaceComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes
    ),
    BrowserModule,
    FormsModule,
  ],
  providers: [DoctorService, EventService, GridviewService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
