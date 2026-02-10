import { Navbar } from "../components/NavBar"
import "../styles/Navbar.css"
import "../styles/Layout.css";
import "../styles/Card.css"
import { getAllProducts, addNewProducts, searchForId, updateProduct, deleteProduct } from "../services/productos"
import { onSnapshot, collection, addDoc, getDocs, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { useState, useEffect } from "react";

const Home = () => {

    const [products, setProducts] = useState([])
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        stock: "",
        image: ""
    })


    useEffect(() => {
        const colRef = collection(db, "products")

        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(data)
        })

        return () => unsubscribe()
    }, [])

    return (
        <>
            <ul className="card-list">
                {products.map(p => (
                    <div className="card-product" key={p.id}>
                        <img className="card-image" src={p.image} />
                        <h3>{p.name}</h3>
                        <p>{p.description}</p>
                        <p>STOCK: {p.stock}</p>
                    </div>
                ))}
            </ul>
        </>
    )
}


export { Home }