import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject, switchMap } from 'rxjs';
import { Bild } from '../model/bild';
import { ButtonBildKommunikationService } from '../services/button-bild-kommunikation.service';

@Component({
  selector: 'app-single-image-page',
  templateUrl: './single-image-page.component.html',
  styleUrls: ['./single-image-page.component.css']
})
export class SingleImagePageComponent implements OnInit {

  imageName: string

  constructor(private route: ActivatedRoute, private kommunikation: ButtonBildKommunikationService) {
    this.imageName = "";
  }

  getImage(): Bild {
    return this.kommunikation.getImageWithName(this.imageName);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.imageName = params.get('name')!
      }
    );
  }

}
