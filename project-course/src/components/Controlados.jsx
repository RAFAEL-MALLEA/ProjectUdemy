import { useState } from "react";

const Controlados = () => {

    const [todo, setTodo] = useState({
        title: '',
        description: '',
        estado: 'pendiente',
    });

            const handleSubmit = (e) => {
            e.preventDefault();
            };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="ingrese cantidad" 
            className="form-control mb-2"
            name="title"
            value={todo.title}
            onChange={(e) => setTodo({...todo, title: e.target.value})}
            />

            <textarea 
            className="form-select mb-2" 
            placeholder="ingrese mensaje"
            name="description"
            value={todo.description}
            onChange={(e) => setTodo({...todo, description: e.target.value})}
            />

            <select 
            className="form-control mb-2" 
            name="estado" 
            value={todo.estado} 
            onChange={(e) => setTodo({...todo, estado: e.target.value})}
            >
                <option value="pendiente">pendiente</option>
                <option value="en proceso">en proceso</option>
                <option value="completado">completado</option>
                
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>

        </form>
    );
}

export default Controlados