import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Problem } from 'src/app/Store/model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {


  uri = 'http://localhost:3000/event/notification';

  constructor(private http: HttpClient) { }

  pushit(model: Problem) {

    const fd = new FormData();


    fd.append('title', model.title);
    fd.append('description', model.desc);
    model.images.filter((val, _, __) => { return val.file }).forEach(element => fd.append('image', element.file, element.file.name));

    this.http.post(this.uri, fd , {
      reportProgress: true,
      observe: 'events'
    }).subscribe((val) => { console.log(val); }, error => console.log(error))

  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }
}
