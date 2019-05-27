import { Component, OnInit, ViewChild } from '@angular/core';
import { SwalPartialTargets, SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  @ViewChild('SwalPopup') public SwalPopup: SwalComponent;

  constructor(public readonly swalTargets: SwalPartialTargets) { }

  openDialog(): void {
    
  }


  ngOnInit() {
  }

}
