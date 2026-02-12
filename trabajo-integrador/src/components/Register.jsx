import { useForm } from "react-hook-form";
import "../styles/forms.css"


const Register = () => {
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
        <main className="contacto-container">
            <form onSubmit={onSubmit} className="contacto-form">
                <h2>Registrarse</h2>

                <div className="form-group">
                    <p>Nombre</p>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "El nombre es requerido"
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

                <button type="submit">Registrar</button>
            </form>
        </main>
    );

}

export { Register }