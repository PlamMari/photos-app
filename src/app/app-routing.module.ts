import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotoContainerComponent } from './components/photo-container/photo-container.component';
import { HomeComponent } from './components/home/home.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'photos', component: PhotoContainerComponent },
  { path: 'photo/:photoId', component: PhotoDetailsComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
