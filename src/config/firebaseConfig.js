// Importar las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuración de Firebase proporcionada
const firebaseConfig = {
    apiKey: "AIzaSyAhYb52nPTpjHoBjtR0AJdgY291DcgXSWU",
    authDomain: "fir-crud-expo.firebaseapp.com",
    projectId: "fir-crud-expo",
    storageBucket: "fir-crud-expo.firebasestorage.app",
    messagingSenderId: "460656275368",
    appId: "1:460656275368:web:55f2360f2b0a739733379d",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firebase Auth con persistencia
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Inicializar Firestore
export const db = getFirestore(app);