import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule {
}
