import { addDoc, collection, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase";

const productCollection = collection(db, "products")

const getAllProducts = async () => {
    const snapshot = await getDocs(productCollection)
    return snapshot.docs
}

const addNewProducts = async (products) => {
    const docRef = await addDoc(productCollection, products)
    return {
        id: docRef.id,
        ...products
    }
}

const updateProduct = async (id, updates) => {
    const ref = doc(db, "products", id)
    await updateDoc(ref, updates)
}

const searchForId = async (id) => {
    const productCollection = doc(db, "products", id)
    const snapshot = await getDoc(productCollection)

    if (!snapshot.exists()) return null

    return {
        id: snapshot.id,
        ...snapshot.data()
    }
}

const deleteProduct = async (id) => {
    const product = doc(db, "products", id)
    await deleteDoc(product)
    return id
}


export { getAllProducts, addNewProducts, searchForId, updateProduct, deleteProduct }
