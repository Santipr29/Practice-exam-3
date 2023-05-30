import { Candidate } from "../types/candidate"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase"

export const addCandidate = async(candidate: Candidate): Promise<Actions>=>{

    await firebase.AddCandidateDB(candidate);

    return{
        action: SomeActions.ADD_CANDIDATE,
        payload: candidate,
    }
}

export const getCandidates = async(): Promise<Actions>=>{

    const candidates = await firebase.GetCandidateDB();

    return{
        action: SomeActions.GET_CANDIDATE,
        payload: candidates,
    }
}