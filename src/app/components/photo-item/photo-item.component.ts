import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Photo, PhotoData } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})
export class PhotoItemComponent implements OnInit {

  constructor(private router: Router) { }

//photoData!: Photo;
@Input() photoData!: Photo
// @Output() newPhoto = new EventEmitter <Photo>()

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
}
