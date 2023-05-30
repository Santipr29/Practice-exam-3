import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { Candidate } from "../types/candidate";
import { getFirestore, collection, addDoc, getDocs, orderBy, query} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AddCandidateDB = async (candidate: Candidate) =>{
    try {
    const where = collection(db, "candidates1")
      await addDoc(where,{...candidate, createdAt: new Date()});
      return true
    } catch (e) {
      console.error("Error adding document: ", e);
      return false
    }
}

const GetCandidateDB = async(): Promise<Candidate[]> =>{
    const resp: Candidate[] = [];

    const q=query(collection(db,"candidates1"), orderBy("createdAt"))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      resp.push({
        ...doc.data()
      }as Candidate)
    });
    return resp
}

export default{
    AddCandidateDB,
    GetCandidateDB
}