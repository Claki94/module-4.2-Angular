import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesString } from './core';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CrudComponent } from './pages/crud/crud.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: routesString.home, component: HomeComponent },
  { path: routesString.login, component: LoginComponent },
  { path: routesString.aboutUs, component: AboutUsComponent },
  { path: routesString.dashboard, component: DashboardComponent },
  { path: routesString.gallery, component: GalleryComponent },
  { path: routesString.crud, component: CrudComponent },
  { path: routesString.profile, component: ProfileComponent },
  { path: '', redirectTo: routesString.home, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
