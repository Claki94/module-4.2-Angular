import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [LayoutModule, PagesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
