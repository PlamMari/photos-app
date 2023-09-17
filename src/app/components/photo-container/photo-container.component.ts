import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';
import { AddToFavouritesService } from 'src/app/services/add-to-favourites.service';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  constructor (private photoService: PhotoService, private route: ActivatedRoute) { }

  photoData!: Photo[];

  @Input() public favs: Photo[] = [];

  itemsPerPage: number= 5;
  activePage: number= 0;
  visiblePagesArr!: number[];

  ngOnInit(): void {

    this.activePage= 1;
    this.route.queryParamMap.subscribe(params => {
      const page = params.get('p');
      if(page !== null){
        this.activePage= parseInt(page, 10);
      }
    });
    console.log(this.activePage);

    this.photoService.getPhotos$()
      .subscribe({
        next: (response: Photo[]) => {

          var numTotalItems= response.length;
          var totalPages= Math.ceil(numTotalItems/this.itemsPerPage);//TODO: calc properly
          var itemStartIndex=(this.activePage-1)*this.itemsPerPage;
          var itemEndIndex=itemStartIndex+this.itemsPerPage;
          var lowerPagesBound= this.activePage< 5? 0: this.activePage-5;
          lowerPagesBound= this.activePage> totalPages-5 ? totalPages-11: lowerPagesBound;
          this.visiblePagesArr= Array(11).fill(0).map((x, i) => lowerPagesBound+ i+1);

          this.photoData = response.slice(itemStartIndex, itemEndIndex);
          console.log('FROM NEXT', this.photoData);
        },
        error: (error: Error) => { console.log(error) },
        complete: () => { console.log('from complete - finished') }     
      })
      console.log('from this.photos - ', this.photoData)
  }

  // handle the custom event from the child component and remove the item from the favourites list
  public onRemoveFromFav(fav: any) {
    // find the index of the item in the array
    const index = this.favs.findIndex(item => item.id === fav.id);
    // if found, remove it from the array
    if (index > -1) {
      this.favs.splice(index, 1);
    }
  }
}
