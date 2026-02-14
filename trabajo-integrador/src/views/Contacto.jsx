import { useForm } from "react-hook-form"
import "../styles/forms.css"


const Contacto = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        data: {
            nombre: "",
            email: ""
        }
    })

    const onSubmit = handleSubmit((data) => {
        console.log("Enviado con exito", data)
        reset();
    })

    return (
        <main className="contacto-container">
            <form onSubmit={onSubmit} className="contacto-form">
                <h2>Contacto</h2>

                <div className="form-group">
                    <p>Nombre</p>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        {...register("nombre", {
                            required: {
                                value: true,
                                message: "El nombre es requerido"
                            }
                        })

                        }
                    />
                    {errors.nombre && (
                        <span className="error-nombre">
                            {errors.nombre.message}
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

                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}


export { Contacto }