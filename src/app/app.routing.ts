import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './_guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', //was dashboard
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        canActivate: [AuthGuard],
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        canActivate: [AuthGuard],
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        canActivate: [AuthGuard],
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        canActivate: [AuthGuard],
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        canActivate: [AuthGuard],
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        canActivate: [AuthGuard],
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        canActivate: [AuthGuard],
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'projects',
        canActivate: [AuthGuard],
        loadChildren:'./views/projects/projects.module#ProjectsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
