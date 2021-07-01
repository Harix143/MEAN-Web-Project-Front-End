import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrvDashboardComponent } from 'src/app/modules/drv-dashboard/drv-dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DrvDefaultComponent } from './drv-default.component';
import { DrvServicesService } from 'src/app/modules/drv-services.service';



@NgModule({
  declarations: [
    DrvDefaultComponent,
    DrvDashboardComponent,
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
    DrvServicesService
  ]
})
export class DrvDefaultModule { }
