import { Component, OnInit } from '@angular/core';
import { ButtonBildKommunikationService } from '../services/button-bild-kommunikation.service';

@Component({
  selector: 'app-togglebutton',
  templateUrl: './togglebutton.component.html',
  styleUrls: ['./togglebutton.component.css']
})
export class TogglebuttonComponent implements OnInit {

  constructor(private kommunikation: ButtonBildKommunikationService) { }

  ngOnInit(): void {
  }

  bilderWechsel() {
    this.kommunikation.toggleBild();
  }
}
