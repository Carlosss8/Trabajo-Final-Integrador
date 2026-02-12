import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../styles/Layout.css";

const Login = ({ onLogin }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = () => {
        onLogin();
        navigate(from, { replace: true });
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        data: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit = handleSubmit((data) => {
        console.log("Registrado correctamente", data)
        reset()
    })

    return (
        <>
            <button className="button-login" onClick={() => navigate(-1)}>Volver</button>
            <main className="contacto-container">
                <div className="card-login">
                    <form onSubmit={onSubmit} className="contacto-form">
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
                                        value: "/^[a-zA-Z0-9_.+-]+@",
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
                                    required: {
                                        value: true,
                                        message: "La constraseña es requerida"
                                    }
                                })

                                }
                            />
                            {errors.name && (
                                <span className="error-nombre">
                                    {errors.name.message}
                                </span>
                            )}
                        </div>

                        <h2>Debes loguearte o registrarte comprar nuestros productos</h2>
                        <button className="button-login" onClick={handleLogin}>Iniciar sesion</button>
                        <button className="button-login" onClick={handleLogin}>Registrarse</button>
                    </form>


                </div>
            </main>
        </>
    );
};

export { Login };