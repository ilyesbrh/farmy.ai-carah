import { Component, OnInit } from '@angular/core';
import { ExpertSolution, Problem } from 'src/app/Store/model';
import { ActivatedRoute } from "@angular/router";
import { Store } from '@ngrx/store';
import { State, getProblemById } from 'src/app/Store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reply-problem',
  templateUrl: './reply-problem.component.html',
  styleUrls: ['./reply-problem.component.scss']
})
export class ReplyProblemComponent implements OnInit {

  problem: Observable<Problem>;
  mySolution: ExpertSolution;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get("id");
    this.problem = this.store.select<Problem>(getProblemById, { id: id });

    this.mySolution = {}
  }

}
