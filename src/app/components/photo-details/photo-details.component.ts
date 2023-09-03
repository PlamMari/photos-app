import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo, PhotoData } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent {
  constructor(private route: ActivatedRoute, private photoService: PhotoService, private router: Router) {
    console.log('photo', this.photo);
    this.photo = this.router.getCurrentNavigation()?.extras.state
  }

photoId: string = '';

photo!: PhotoData | undefined;

loading: boolean = true;

ngOnInit() {
  this.photoId = this.route.snapshot.params['photoId']  
  console.log(this.route.snapshot.params['photoId']);
  this.photoService.getPhotoById$(this.photoId)
    .subscribe({
      next: (response: Photo) => { 
        this.photo = response
        console.log(this.photo);
      },
      error: (error: Error) => { 
        console.log(error);
        this.router.navigate(['/'])
        },
      complete: () => { 
        console.log('Done')
        this.loading = false
      },
    })
}
}
