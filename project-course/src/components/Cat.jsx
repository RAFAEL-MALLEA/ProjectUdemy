import { useState } from "react";
const Cat = () => {

    const [cat, setCat] = useState({name: "Gato", age: 5})

    

    const handleClick = () => {
        // setCat(...cat, year: cat.year + 1);
        setCat((prev) => ({ ...prev, age: cat.age + 1 }));
    };
    return (
        <>
            <h2>
                {cat.name} - {cat.age}
            </h2>
            <button onClick={handleClick} className="btn btn-primary me-2">Update year</button>
        </>
    );
};
export default Cat;