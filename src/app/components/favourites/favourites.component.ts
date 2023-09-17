import { Component, Input, Output } from '@angular/core';
import { Photo, PhotoData } from 'src/app/interfaces/photo';
import { AddToFavouritesService } from 'src/app/services/add-to-favourites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
@Input() favs!: Photo[];
// public favs: Photo[] = [{
//     "albumId": "1",
//     "id": "1",
//     "title": "accusamus beatae ad facilis cum similique qui sunt",
//     "url": "https://via.placeholder.com/600/92c952",
//     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
//   },
//   {
//     "albumId": "1",
//     "id": "2",
//     "title": "reprehenderit est deserunt velit ipsam",
//     "url": "https://via.placeholder.com/600/771796",
//     "thumbnailUrl": "https://via.placeholder.com/150/771796"
//   },
//   {
//     "albumId": "1",
//     "id": "3",
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
//   }]

constructor (private addToFavs: AddToFavouritesService) {}

ngOnInit(): void {
  // get the items from a service or a mock data
  // this.items = this.getItems();
  // subscribe to the favourites list observable from the service
  this.addToFavs.favouritesList$.subscribe(favourites => {
    // update the favourites array with the latest data
  this.favs = favourites;
  console.log(favourites);
  });
  
}

removeFromFavourites(photo: Photo) { 
  alert('removed')
 this.addToFavs.removeFromFavourites(photo)
}

public isFavourite(photo: Photo | PhotoData): boolean {
  return this.favs.some(fav => fav.id === photo.id);
}
}
