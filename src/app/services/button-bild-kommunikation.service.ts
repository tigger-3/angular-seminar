import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Bild } from '../model/bild';
import { ServerKommunikationService } from './server-kommunikation.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonBildKommunikationService {

  bildNummer = 0;
  liste: Bild[] = [
  ]

  private subject: Subject<Bild>;


  toggleBild(){
    this.bildNummer++;
    this.bildNummer %= this.liste.length;
    this.subject.next(this.liste[this.bildNummer])
  }

  getPictureAsObservable(): Observable<Bild> {
    return this.subject.asObservable();
  }

  addImage(){
    this.liste.push({src: 'https://duckduckgo.com/i/f1b7948a.png',name: 'Neues Bild'})
    this.serverKommunikation.setImages(this.liste)
  }

  updateImage(bild: Bild){
    this.serverKommunikation.setImages(this.liste)
  }

  deleteImage(bildZuLöschen: Bild){
    this.liste = this.liste.filter((bild) => {return !(bild===bildZuLöschen)})
    this.serverKommunikation.setImages(this.liste)
  }

  constructor(private serverKommunikation: ServerKommunikationService) {
    this.subject = new Subject<Bild>();
    this.serverKommunikation.getImages().subscribe(
      (next) => {
        this.liste = next
        this.subject.next(this.liste[0])
      }
    )
  }
}
