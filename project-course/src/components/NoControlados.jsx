import { useRef, useState } from "react";

const NoControlados = () => {

    const form = useRef(null);
    const [error, setError] = useState("");

            const handleSubmit = (e) => {
            e.preventDefault();
            setError("");


            //capturar los datos del formulario
            const data = new FormData(form.current);
            const {title, description, state} = Object.fromEntries([
                ...data.entries(),
            ]);

            console.log({title, description, state});

            //validar los datos del formulario

            if (!title.trim() || !description.trim() || !state.trim()) 
                return setError("rellene todos los campos");
            

            //enviar los datos a la api



        };


    return (


        <form onSubmit={handleSubmit} ref={form}>
            <input type="text" 
            placeholder="ingrese cantidad" 
            className="form-control mb-2"
            name="title"
            defaultValue="1"
            />

            <textarea className="form-select mb-2" 
            placeholder="ingrese mensaje"
            name="description"
            defaultValue="descripcion #1"
            />

            <select className="form-control mb-2" name="state" defaultValue="completado">
                <option value="pendiente">pendiente</option>
                <option value="en proceso">en proceso</option>
                <option value="completado">completado</option>
                
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {
                error !== "" && error
            }
        </form>
    );
}

export default NoControlados