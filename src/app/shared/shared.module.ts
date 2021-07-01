import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';


import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { StdHeaderComponent } from './components/std-header/std-header.component';
import { StdSidebarComponent } from './components/std-sidebar/std-sidebar.component';
import { StdFooterComponent } from './components/std-footer/std-footer.component';
import { DrvHeaderComponent } from './components/drv-header/drv-header.component';
import { DrvFooterComponent } from './components/drv-footer/drv-footer.component';
import { DrvSidebarComponent } from './components/drv-sidebar/drv-sidebar.component';
import { PrnHeaderComponent } from './components/prn-header/prn-header.component';
import { PrnFooterComponent } from './components/prn-footer/prn-footer.component';
import { PrnSidebarComponent } from './components/prn-sidebar/prn-sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    StdHeaderComponent,
    StdSidebarComponent,
    StdFooterComponent,
    DrvHeaderComponent,
    DrvFooterComponent,
    DrvSidebarComponent,
    PrnHeaderComponent,
    PrnFooterComponent,
    PrnSidebarComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
     MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
   HighchartsChartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    StdHeaderComponent,
    StdSidebarComponent,
    StdFooterComponent,
    DrvHeaderComponent,
    DrvFooterComponent,
    DrvSidebarComponent,
    PrnHeaderComponent,
    PrnFooterComponent,
    PrnSidebarComponent
  ]
})
export class SharedModule { }