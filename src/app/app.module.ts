import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoItemComponent } from './components/photo-item/photo-item.component';
import { PhotoContainerComponent } from './components/photo-container/photo-container.component';
import { PrettyPhotoPipe } from './pipes/pretty-photo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoService } from './services/photo.service';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { AddToFavouritesService } from './services/add-to-favourites.service';
import { FavouritesComponent } from './components/favourites/favourites.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PhotoItemComponent,
    PhotoContainerComponent,
    PrettyPhotoPipe,
    NotFoundComponent,
    HomeComponent,
    NavigationComponent,
    PhotoDetailsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [PhotoService, AddToFavouritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
