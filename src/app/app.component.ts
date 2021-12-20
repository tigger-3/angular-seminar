import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  picture = '';
  liste = ['https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_1280.jpg',
  'https://im.chip.de/ii/5/6/7/6/2/8/4/8/43dff6dc96b32060.jpeg?im=Resize%3D%28618%2C348%29%2Caspect%3Dfit%3BAspectCrop%2Csize%3D%28618%2C348%29%2Cgravity%3DCenter%2CallowExpansion%3BBackgroundColor%2Ccolor%3Dffffff&hash=867e8a25b4276e796a558dadfdffd1e8b2cd8213295a199968e64649a857bdd9',
    'https://www.autozeitung.de/assets/styles/article_image/public/field/images/09-pininfarina-battista.jpg?itok=VPPIVXmg']
  bildNummer = 0;

  bilderWechsel() {
    this.bildNummer++;
    this.bildNummer %= this.liste.length
    this.picture = this.liste[this.bildNummer];
  }
}
