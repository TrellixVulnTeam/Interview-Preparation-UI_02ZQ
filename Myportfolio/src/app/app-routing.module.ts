import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InterestingFactsComponent } from './components/interesting-facts/interesting-facts.component';
import { AngularComponent } from './components/interview-content/angular/angular.component';
import { SpringBootComponent } from './components/interview-content/spring-boot/spring-boot.component';
import { MyApplicationsComponent } from './components/my-applications/my-applications.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'interesting-facts',
        component: InterestingFactsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'angularContent',
        component: AngularComponent,
      },
      {
        path: 'springboot-content',
        component: SpringBootComponent,
      },
      {
        path: 'myApplications',
        component: MyApplicationsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
