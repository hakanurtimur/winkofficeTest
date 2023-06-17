// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgyfRL3IQSD5Ic7G3Es3WHUTPUw2V5MfM",
  authDomain: "wotest-c14f1.firebaseapp.com",
  projectId: "wotest-c14f1",
  storageBucket: "wotest-c14f1.appspot.com",
  messagingSenderId: "91946030438",
  appId: "1:91946030438:web:fb1c6e235be3adc35624a7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
