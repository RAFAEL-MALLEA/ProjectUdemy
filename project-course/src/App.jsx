import imgUno from './assets/images/img-1.jpg';

import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ItemFrut from './components/ItemFrut';

const App = () => {
    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    // const pathimg = "src/assets/images/img-1.jpg";
    const user = true;

    const fruts = ['🍎','🍊','🍅']
    
    return (
        <>
            <h1 className={classTitle}>{title}</h1>
            <img src={imgUno} alt={`imagen-${title}`}/>

            <MyButton text='boton 1'/>
            <MyButton text='boton 2'/>
            <MyButton text='boton 3'/>

            {<WelcomeText users ={user}/>}

            <ul>
                {fruts.map((frut, index) => {
                return  <ItemFrut key={index} frutas={frut}/>
                })}
            </ul>

            <div className="container">
                <h1>Formularios controlados</h1>
                <Controlados /><br /><br /><br />
    
                <h1>Formularios no controlados</h1>
                <NoControlados />
    
                <Cat />
            </div>
        </>
    );
};

export default App;
