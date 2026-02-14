import "../styles/NavBar.css";
import "../styles/Layout.css";
import "../styles/Card.css"
import "../styles/formProduct.css";
import { getAllProducts, addNewProducts, searchForId, updateProduct, deleteProduct } from "../services/productos"
import { onSnapshot, collection, addDoc, getDocs, doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore"
import { db } from "../config/firebase"
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext";

const Home = () => {

    const [products, setProducts] = useState([])
    const [result, setResult] = useState(null)
    const [editingProduct, setEditingProduct] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        stock: "",
        image: ""
    })

    const { currentUser, loading } = useAuth();

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

    const resetForm = () => {
        setFormData({
            name: "",
            price: "",
            description: "",
            stock: "",
            image: ""
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await addNewProducts(formData)
        setFormData({ name: "", price: "", description: "", stock: "", image: "" })
        resetForm()
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        await updateProduct(editingProduct, formData)
        setEditingProduct(null)
        resetForm()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const handleNosotros = () => {
        navigate("/nosotros")
    }

    const handleDeleteProduct = async (id) => {
        try {
            const idDeletedProduct = await deleteProduct(id)
            alert(`Producto id: ${idDeletedProduct} borrado con éxito`)
            const filteredProducts = products.filter(p => p.id !== id)
            setProducts(filteredProducts)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {currentUser && (
                <section className="form-input">
                    <form className="form-product" onSubmit={editingProduct ? handleUpdate : handleSubmit}>
                        <div className="form-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                name="price"
                                type="number"
                                placeholder="Precio"
                                required
                                value={formData.price}
                                onChange={handleChange}
                            />
                            <input
                                name="image"
                                type="text"
                                placeholder="URL Image"
                                required
                                value={formData.image}
                                onChange={handleChange}
                            />
                            <input
                                name="description"
                                type="text"
                                placeholder="Descripcion"
                                required
                                value={formData.description}
                                onChange={handleChange}
                            />
                            <input
                                name="stock"
                                type="number"
                                placeholder="Stock"
                                required
                                value={formData.stock}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit">
                            {editingProduct ? "Actualizar" : "Agregar"}
                        </button>
                    </form>
                </section>
            )}

            <ul className="card-list">
                {products.map(p => (
                    <div className="card-product" key={p.id}>
                        <img className="card-image" src={p.image} />
                        <h3>{p.name}</h3>
                        <h4>USD: ${p.price}</h4>
                        <p>{p.description}</p>
                        <p>STOCK: {p.stock}</p>
                        {currentUser && (
                            <div className="card-actions">
                                <button type="button"
                                    className="btn btn-edit"
                                    onClick={() => {
                                        setEditingProduct(p.id)
                                        setFormData(p)
                                    }}
                                >
                                    Editar
                                </button>

                                <button type="button" className="btn btn-delete" onClick={() => handleDeleteProduct(p.id)} >Borrar</button>
                            </div>
                        )}

                    </div>
                ))}
            </ul >
        </>
    )
}


export { Home }