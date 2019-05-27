import { Problem } from '../model';
import { ProblemActionTypes, ProblemActions } from '../Actions/Problem.Action';
import { createSelector } from '@ngrx/store';

export interface State {
    problems: Array<Problem>
};

const initialState: State = {
    problems: [{
        title: 'testing store',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla auctor non risus eu scelerisque. Nam a felis et odio efficitur faucibus. Integer mattis dolor non velit tempor vehicula. In dignissim magna ac dignissim euismod. Nam lacinia diam quis metus accumsan, quis hendrerit dolor ultrices. Curabitur tempor urna eget magna porta, et feugiat justo pellentesque. Nullam ultricies at enim non molestie. Fusce imperdiet sodales varius.'
    }]
};

export function reducer(state = initialState, action: ProblemActions): State {
    switch (action.type) {
        case ProblemActionTypes.All: {
            return { problems: [...action.payload] };
        }
        case ProblemActionTypes.Add: {
            return { problems: [...state.problems, action.payload] }
        }
        case ProblemActionTypes.Remove: {
            state.problems.splice(action.payload, 1);
            return { problems: [...state.problems] }
        }

        default: {
            return state;
        }
    }
}

export const getProblems = (state: State) => state.problems;
export const getProblem = (state: State, props: any) => state.problems[props.index];
