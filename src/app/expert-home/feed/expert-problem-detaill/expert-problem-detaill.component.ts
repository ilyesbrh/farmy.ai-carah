import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Problem } from 'src/app/Store/model';
import { Store } from '@ngrx/store';
import { State, getProblem } from 'src/app/Store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expert-problem-detaill',
  templateUrl: './expert-problem-detaill.component.html',
  styleUrls: ['./expert-problem-detaill.component.scss']
})
export class ExpertProblemDetaillComponent implements OnInit {

  @ViewChild("modal", { read: ElementRef }) modal: ElementRef;
  @ViewChild("image", { read: ElementRef }) image: ElementRef;
  @ViewChild("caption", { read: ElementRef }) caption: ElementRef;

  model: Observable<Problem>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.model = this.store.select<Problem>(getProblem, { index: 0 });
  }

  Show(event) {

    this.modal.nativeElement.style.display = 'block';
    this.image.nativeElement.src = '../../../../assets/img/bg-showcase-2.jpg';
    this.caption.nativeElement.innerHTML = 'test';
  }
  hide() {
    this.modal.nativeElement.style.display = 'none';
  }

}
