import { OperationalDiagnosisComponent } from './layout/main-layout/operational-diagnosis/operational-diagnosis.component';
import { AcceleratorProgrammeComponent } from './layout/main-layout/accelerator-programme/accelerator-programme.component';
import { HapinessFactorComponent } from './layout/main-layout/hapiness-factor/hapiness-factor.component';
import { TargetCultureComponent } from './layout/main-layout/target-culture/target-culture.component';
import { CurrentCultureComponent } from './layout/main-layout/current-culture/current-culture.component';
import { MiniAssesmentComponent } from './layout/main-layout/mini-assesment/mini-assesment.component';
import { AuthGuardService } from './utils/auth-guard.service';
import { FaqComponent } from './layout/main-layout/faq/faq.component';
import { AboutUsComponent } from './layout/main-layout/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/gateway/auth/auth.component';
import { AssesmentComponent } from './layout/main-layout/assesment/assesment.component';
import { SalesMarketingComponent } from './layout/main-layout/assesment/sales-marketing/sales-marketing.component';
import { HomeComponent } from './layout/main-layout/home/home.component';
import { MonthPlanComponent } from './layout/main-layout/month-plan/month-plan.component';
import { ReportComponent } from './layout/main-layout/report/report.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  // {
  //   path: "login",
  //   component: AuthComponent,
  // },
  {
    path:"home",
    component: HomeComponent,
  },
  {
    path:"assesment",
    component: AssesmentComponent,

  },
  {
    path: "current-culture",
    component: CurrentCultureComponent,

  },
  {
    path: "target-culture",
    component: TargetCultureComponent,

  },
  {
    path: "happiness-factor",
    component: HapinessFactorComponent,

  },
  {
    path: "accelerator-programme",
    component: AcceleratorProgrammeComponent,

  },
  {
    path: "operational-diagnosis",
    component: OperationalDiagnosisComponent,

  },
  {
    path: "assesment/:id",
    component: SalesMarketingComponent,

  },
  {
    path:"report",
    component: ReportComponent,

  },
  {
    path:"monthly_plan",
    component: MonthPlanComponent,

  },
  {
    path: "about-us",
    component: AboutUsComponent,

  },
  {
    path: "faq",
    component: FaqComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
