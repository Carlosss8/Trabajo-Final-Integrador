import { useForm } from "react-hook-form";
import "../styles/forms.css"
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            /* name: "",*/
            email: "",
            password: ""
        }
    })

    const navigate = useNavigate();
    const { register: registerUser } = useAuth();
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [showLoginButton, setShowLoginButton] = useState(false);

    const onSubmit = async (data) => {
        setError("")
        setSuccess("")
        setShowLoginButton(false);

        try {
            await registerUser(data.email, data.password)
            setSuccess("Usuario creado con éxito.")
            reset()
            navigate("/");
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Este email ya está registrado, intenta con otro.");
                setShowLoginButton(true);
            } else {
                setError("Error al crear usuario.");
            }
        }
    }

    return (
        <main className="contacto-container">
            <form onSubmit={handleSubmit(onSubmit)} className="contacto-form">
                <h2>Registrarse</h2>

                <div className="form-group">
                    <p>Correo Electronico</p>
                    <input
                        type="email"
                        placeholder="tuemail@mail.com"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "El correo es requerido"
                            },
                            pattern: {
                                value: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
                                message: "Correo no valido"
                            }
                        })}
                    />
                    {errors.email && (
                        <span className="error-nombre">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <p>Constraseña</p>
                    <input
                        type="password"
                        placeholder="Introduzca su constraseña"
                        {...register("password", {
                            required: "La contraseña es requerida",
                            minLength: { value: 6, message: "Mínimo 6 caracteres" }
                        })}

                    />
                    {errors.name && (
                        <span className="error-nombre">
                            {errors.name.message}
                        </span>
                    )}
                </div>

                <button type="submit">Registrarse</button>
                {showLoginButton && (
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                    >
                        Ya tenes una cuenta creada
                    </button>
                )}
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </main>
    );

}

export { Register }