import { Route } from '@angular/router';
import {HomeComponent} from './home.component';


export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./welcome/welcome.module').then(w => w.WelcomeModule)
      },
      {
        path: 'pie-report',
        loadChildren: () => import('./pie-chart/pie-chart.module').then(pc => pc.PieChartModule)
      },
      {
        path: 'bar-report',
        loadChildren: () => import('./bar-chart-horizontal/bar-chart-horizontal.module').then(bc => bc.BarChartHorizontalModule)
      },
      {
        path: 'bar-range-report',
        loadChildren: () => import('./range-bar-chart/range-bar-chart.module').then(rb => rb.RangeBarChartModule)
      },
      {
        path: 'eight-column-report',
        loadChildren: () => import('./eight-column-report/eight-column-report.module').then(ei => ei.EightColumnReportModule)
      }
    ]
  }
];
