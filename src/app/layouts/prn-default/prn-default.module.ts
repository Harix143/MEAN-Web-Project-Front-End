import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PrnDefaultComponent } from './prn-default.component';
import { PrnDashboardComponent } from 'src/app/modules/prn-dashboard/prn-dashboard.component';
import { PrnServicesService } from 'src/app/modules/prn-services.service';

@NgModule({
  declarations: [
    PrnDefaultComponent,
    PrnDashboardComponent,
  ],
  imports: [
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
    PrnServicesService
  ]
})
export class PrnDefaultModule { }
