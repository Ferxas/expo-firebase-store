import { db } from "../config/firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Agregar un documento a una colección
export const addDocument = async (collectionName, data) => {
    try {
        const docRef = await addDoc(collection(db, collectionName), data);
        return docRef.id;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener documentos de una colección con filtros opcionales
export const getDocuments = async (collectionName, filters = []) => {
    try {
        let q = collection(db, collectionName);

        if (filters.length > 0) {
            filters.forEach((filter) => {
                q = query(q, where(filter.field, filter.operator, filter.value));
            });
        }

        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw new Error(error.message);
    }
};