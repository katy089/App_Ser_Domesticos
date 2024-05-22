import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { v4 } from 'uuid'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDakgGwqZgy2dHsHhAluPu1T44gbiooWuQ",
  authDomain: "contratame-app.firebaseapp.com",
  projectId: "contratame-app",
  storageBucket: "contratame-app.appspot.com",
  messagingSenderId: "3289401698",
  appId: "1:3289401698:web:bb03255449a841c072043b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app)

export async function uploadFile(file) {
  const storageRef = ref(storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}