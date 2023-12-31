import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getPhotos$(): Observable<Photo[]>{
    return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
  }

  getPhotoById$(id: string) {
    return this.http.get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
}
