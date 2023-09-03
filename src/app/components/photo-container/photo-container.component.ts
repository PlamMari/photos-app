import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-container',
  templateUrl: './photo-container.component.html',
  styleUrls: ['./photo-container.component.css']
})
export class PhotoContainerComponent implements OnInit {

  constructor (private photoService: PhotoService, private route: ActivatedRoute) { }

  photoData!: Photo[];

  itemsPerPage: number= 50;
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
          /*
            $numTotalItems= count($arr);
            $itemsPerPage= 5;

            $page= isset($_GET["p"])? $_GET["p"]: 2;
            $totalPages= ceil($numTotalItems/$itemsPerPage);
            $pageItemsCount= $totalPages> $page? $itemsPerPage: $numTotalItems-($totalPages-1)*$itemsPerPage;
            $itemStartIndex= ($page-1)*$itemsPerPage;
            $itemEndIndex= $itemStartIndex+$pageItemsCount;
            
            for($i= $itemStartIndex; $i< $itemEndIndex; $i++)
            {
              echo $arr[$i]->id."\n";
            }
            echo "items: ".$numTotalItems.", pages: ".$totalPages;
          */

          var numTotalItems= response.length;
          var totalPages= 8;//TODO: calc properly
          var itemStartIndex=0;
          var itemEndIndex=2;

          this.visiblePagesArr= Array(totalPages).fill(0).map((x, i) => i+1);

          this.photoData = response.slice(itemStartIndex, itemEndIndex);
          console.log('FROM NEXT', this.photoData);
        },
        error: (error: Error) => { console.log(error) },
        complete: () => { console.log('from complete - finished') }     
      })
      console.log('from this.photos - ', this.photoData)
  }

}
