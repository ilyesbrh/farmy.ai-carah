import * as problem from './Reducers/Problem.Reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

export interface State {
  Problem: problem.State
}

export const reducers: ActionReducerMap<State> = {
  Problem: problem.reducer
};


export const selectProblems = createFeatureSelector<problem.State>('Problem');
export const getProblems = createSelector(selectProblems,problem.getProblems);
export const getProblemByIndex = createSelector(selectProblems,problem.getProblemById);
export const getProblemById = createSelector(selectProblems,problem.getProblemByIndex);