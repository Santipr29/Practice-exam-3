import { Candidate } from "./candidate";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  candidates: Candidate[];
};

export enum SomeActions {
  "ADD_CANDIDATE" = "ADD_CANDIDATE",
  "GET_CANDIDATE" = "GET_CANDIDATE",
}

export interface AddCandidateAction {
  action: SomeActions.ADD_CANDIDATE;
  payload: Candidate;
}

export interface GetCandidateAction {
  action: SomeActions.GET_CANDIDATE;
  payload: Candidate[];
}

export type Actions = AddCandidateAction | GetCandidateAction;
