import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
  ],
  imports: [SharedModule],
  exports: [
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    DashboardComponent,
    GalleryComponent,
    CrudComponent,
    ProfileComponent,
  ],
})
export class PagesModule {}
