import { Component, OnInit } from '@angular/core';
import { Bild } from '../model/bild';
import { ButtonBildKommunikationService } from '../services/button-bild-kommunikation.service';

@Component({
  selector: 'app-bild',
  templateUrl: './bild.component.html',
  styleUrls: ['./bild.component.css']
})
export class BildComponent implements OnInit {

  constructor(private kommunikation: ButtonBildKommunikationService) {
    this.picture = kommunikation.liste[0];
  }

  ngOnInit(): void {
    this.kommunikation.getPictureAsObservable().subscribe((picture)=>{this.picture=picture})
  }

  picture: Bild;

}
