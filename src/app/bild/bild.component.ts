import { Component, OnInit } from '@angular/core';
import { __makeTemplateObject } from 'tslib';
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
    this.kommunikation.getPicture().subscribe((next)=>{this.picture=next})
  }

  picture: Bild;

}
