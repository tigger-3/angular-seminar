import { Component, OnInit } from '@angular/core';
import {ButtonBildKommunikationService} from "../services/button-bild-kommunikation.service";
import {Bild} from "../model/bild";

@Component({
  selector: 'app-image-table',
  templateUrl: './image-table.component.html',
  styleUrls: ['./image-table.component.css']
})
export class ImageTableComponent implements OnInit {

  constructor(private kommunikation: ButtonBildKommunikationService) { }

  ngOnInit(): void {
  }

  getListe(): Bild[]{
    return this.kommunikation.liste
  }

  addImage(){
    this.kommunikation.addImage()
  }

  updateImageName(bild: Bild, name: string){
    bild.name = name;
    this.kommunikation.updateImage(bild)
  }

  updateImageSrc(bild: Bild, src: string){
    bild.src = src;
    this.kommunikation.updateImage(bild)
  }

  deleteImage(bildZuLöschen: Bild){
    this.kommunikation.deleteImage(bildZuLöschen)
  }
}
