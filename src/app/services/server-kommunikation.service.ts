import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bild } from '../model/bild';

@Injectable({
  providedIn: 'root'
})
export class ServerKommunikationService {

  url = 'localhost'
  port = 8081

  constructor(private http: HttpClient) { }

  getImages(): Observable<Bild[]>{
    let ret = new Subject<Bild[]>();
    this.http.get<Bild[]>('http://'+this.url+':'+this.port).subscribe(
      (next) => {
        ret.next(next)
      }
    )
    return ret.asObservable()
  }

  setImages(images: Bild[]){
    this.http.post('http://'+this.url+':'+this.port+'/set',images).subscribe(
      (next) => {
      }
    );
  }
}
