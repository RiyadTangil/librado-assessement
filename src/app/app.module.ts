import { InterceptorService } from './utils/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './layout/gateway/auth/auth.component';
import { SidebarComponent } from './layout/shared/sidebar/sidebar.component';
import { HomeComponent } from './layout/main-layout/home/home.component';
import { AssesmentComponent } from './layout/main-layout/assesment/assesment.component';
import { SalesMarketingComponent } from './layout/main-layout/assesment/sales-marketing/sales-marketing.component';
import { ReportComponent } from './layout/main-layout/report/report.component';
import { MonthPlanComponent } from './layout/main-layout/month-plan/month-plan.component';
import { AboutUsComponent } from './layout/main-layout/about-us/about-us.component';
import { FaqComponent } from './layout/main-layout/faq/faq.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxEchartsModule } from 'ngx-echarts';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './layout/shared/header/header.component';
import { AssesmentNotificationComponent } from './layout/main-layout/assesment/assesment-notification/assesment-notification.component';
import { MiniAssesmentComponent } from './layout/main-layout/mini-assesment/mini-assesment.component';
import { CurrentCultureComponent } from './layout/main-layout/current-culture/current-culture.component';
import { TargetCultureComponent } from './layout/main-layout/target-culture/target-culture.component';
import { HapinessFactorComponent } from './layout/main-layout/hapiness-factor/hapiness-factor.component';
import { AcceleratorProgrammeComponent } from './layout/main-layout/accelerator-programme/accelerator-programme.component';
import { ValueDragableComponent } from './layout/shared/value-dragable/value-dragable.component';
import { OperationalDiagnosisComponent } from './layout/main-layout/operational-diagnosis/operational-diagnosis.component';
import { FooterComponent } from './layout/shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SidebarComponent,
    HomeComponent,
    AssesmentComponent,
    SalesMarketingComponent,
    ReportComponent,
    MonthPlanComponent,
    AboutUsComponent,
    FaqComponent,
    HeaderComponent,
    AssesmentNotificationComponent,
    MiniAssesmentComponent,
    CurrentCultureComponent,
    TargetCultureComponent,
    HapinessFactorComponent,
    AcceleratorProgrammeComponent,
    ValueDragableComponent,
    OperationalDiagnosisComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
