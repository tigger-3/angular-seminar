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

  image: Bild

  constructor(private route: ActivatedRoute, private kommunikation: ButtonBildKommunikationService) {
    this.image = {name: "", src: ""}
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.image = this.kommunikation.getImageWithName(params.get('name')!)
      }
    );
  }

}
