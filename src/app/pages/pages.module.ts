import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CoreModule } from '../@core/@core.module';

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    PagesRoutingModule
  ],
  exports: [
    PagesRoutingModule
  ],
  providers: []
})
export class PagesModule { }
