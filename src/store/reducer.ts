import { SomeActions } from "../types/store";
import { AppState } from "../types/store";
import { Actions } from "../types/store";

export const reducer = (actions: Actions, state: AppState) => {
    const {action, payload} = actions
    switch (action) {
        case SomeActions.ADD_CANDIDATE:
            state.candidates = [...state.candidates, payload]
            return state

        case SomeActions.GET_CANDIDATE:
            state.candidates = payload
            return state
    
        default:
            return state;
    }

}