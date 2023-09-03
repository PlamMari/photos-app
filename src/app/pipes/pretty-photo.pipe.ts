import { Pipe, PipeTransform } from '@angular/core';
import { Photo, PhotoData } from '../interfaces/photo';

@Pipe({
  name: 'prettyPhoto'
})
export class PrettyPhotoPipe implements PipeTransform {
  transform(photo: PhotoData) {
    return JSON.stringify(photo, null, 2)
      .replace(' ', '\u00A0')
      .replace('\\n', '<br/>')
      .replace('"url": $photo.url,', '<img [src]= $photo.url alt="{{ photo.title }}" />')
  }
}
