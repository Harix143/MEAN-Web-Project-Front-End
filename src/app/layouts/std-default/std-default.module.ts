import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdDashboardComponent } from 'src/app/modules/std-dashboard/std-dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StdServicesService } from 'src/app/modules/std-services.service';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { StdDefaultComponent } from './std-default.component';

@NgModule({
  declarations: [
    StdDefaultComponent,
    StdDashboardComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
   providers: [
    StdServicesService
  ]
})
export class StdDefaultModule { }
