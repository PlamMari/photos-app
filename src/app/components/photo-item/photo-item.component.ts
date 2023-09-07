import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Photo, PhotoData } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { AddToFavouritesService } from 'src/app/services/add-to-favourites.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {

  constructor(private router: Router, private addToFavs: AddToFavouritesService) { }

//photoData!: Photo;
@Input() photoData!: Photo
// @Output() newPhoto = new EventEmitter <Photo>()
@Output() removeFromFav = new EventEmitter<any>();

 private isFavourite: boolean = false;

  // check if an item is in the favourites list or not using some mock data
  public isFavourite$(item: any): boolean {
    return item.isFavourite;
  }


ngOnInit() {  
  /*this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(data => {
        this.photos = data.map(a => {
          return {
            title: a.title,
            url: a.url
          };
        });
      });*/
  }

  showPhotoDetails() {    
    this.router.navigate([`/photo/${this.photoData.id}`])
    //this.router.navigateByUrl(`/photos/${this.photoData.id}`, {state: this.photoData})
  }

  handleAddToFavs() {
    alert('new alert')
    this.addToFavs.addToFavorites(this.photoData)
    this.isFavourite = true;
}

toggleFavorite(photo: Photo) { this.isFavourite = !this.isFavourite; }

  // emit the custom event with the item data to the parent component
  public removeFromFavourites(photo: Photo) {
  this.removeFromFav.emit(photo);
  }

}
