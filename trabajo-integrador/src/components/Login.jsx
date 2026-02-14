import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/Layout.css";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";


const Login = ({ onLogin }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, { replace: true });
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { login: loginUser } = useAuth()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const onSubmit = async (data) => {
        setError("")
        setSuccess("")

        try {
            await loginUser(data.email, data.password)
            setSuccess("Logueado con exito.")
            reset()
            navigate(from, { replace: true });
        } catch (error) {
            setError("Error al iniciar sesion.")
        }
    }

    return (
        <>
            {/*} <button className="button-login" onClick={() => navigate(-1)}>Volver</button>*/}
            <main className="contacto-container">
                <div className="card-login">
                    <form onSubmit={handleSubmit(onSubmit)} className="contacto-form">
                        <h2>Iniciar sesion</h2>

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
                                        value: "//^[^\s@]+@[^\s@]+\.[^\s@]+$/",
                                        message: "Correo no valido"
                                    },
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
                                    required: {
                                        value: true,
                                        message: "La constraseña es requerida"
                                    }
                                })

                                }
                            />
                            {errors.name && (
                                <span className="error-nombre">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <button className="button-login" type="submit">Iniciar sesion</button>
                        <button className="button-login" type="button" onClick={() => navigate("/register")}>Registrarse</button>
                        {error && <p className="error">{error}</p>}
                        {success && <p className="success">{success}</p>}
                    </form>


                </div>
            </main>
        </>
    );
};

export { Login };