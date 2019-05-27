
import { Action } from '@ngrx/store';
import { Problem } from '../model';
/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ProblemActionTypes {
    All = '[Problem] All',
    Add = '[Problem] Add',
    Remove = '[Problem] Remove'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */

export class Add implements Add {
    readonly type = ProblemActionTypes.Add;

    constructor(public payload: Problem) { }
}

export class All implements Action {
    readonly type = ProblemActionTypes.All;

    constructor(public payload: Problem[]) { }
}


export class Remove implements Action {
    readonly type = ProblemActionTypes.Remove;

    constructor(public payload: number) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ProblemActions
                        = All
                        | Add
                        | Remove;
