import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class AddToFavouritesService {

  private favourites: Photo[] = [
    // {
    //   "albumId": "1",
    //   "id": "1",
    //   "title": "accusamus beatae ad facilis cum similique qui sunt",
    //   "url": "https://via.placeholder.com/600/92c952",
    //   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    // }
  ];

  public favouritesList$ = new BehaviorSubject<Photo[]>(this.favourites);

  constructor() {
    this.loadFavourites();
  }

  addToFavorites(photo: Photo) {
    const index = this.favourites.findIndex(item => item.id === photo.id);
    
    if (index== -1) {
    this.favourites.push(photo)
    this.saveFavourites()
  }
  }

  public removeFromFavourites(fav: Photo) {
  // find the index of the item in the array
    const index = this.favourites.findIndex(item => item.id === fav.id);
  // if found, remove it from the array
    if (index > -1) {
      this.favourites.splice(index, 1);
      // emit the updated list to subscribers
      this.favouritesList$.next(this.favourites);
      // save the list to local storage
      this.saveFavourites();
    }    
  }

  loadFavourites() {
    // get the data from local storage
    const data = localStorage.getItem('favourites');
    // if data exists, parse it and assign it to the array
    if (data) {
      this.favourites = JSON.parse(data);
      // emit the loaded list to subscribers
      this.favouritesList$.next(this.favourites);
    }
    }

  private saveFavourites() {
  // stringify the array and store it in local storage
    localStorage.setItem('favourites', JSON.stringify(this.favourites));
  }

  setFavourite(photoId: string, isFavourite: boolean) {
    localStorage.setItem(photoId, JSON.stringify(isFavourite));
  }

  getFavourite(photoId: string): boolean {
    return this.favourites.some(fav => fav.id == photoId);
  }
}
