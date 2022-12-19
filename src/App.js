import './App.css';
import { useState } from "react";
import Actions from './componentes/Action';
import Counter from './componentes/Counter';

// import Testimonio from './componentes/Testimonio';


function App() {
  
   //  Counter is a state initialized to 0
   const [counter, setCounter] = useState(0);
   var elem;

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
      // Counter state is decremented
      setCounter(counter - 1)
  }

  const handleChange = event=> {
    setCounter(event.target.value);
  }

  return (
    <div className="App">
      {/* <div className='contenedor-principal'>
        <h1>Practice #0</h1>
        <Testimonio
          nombre=''
          pais=''
          imagen='emma'
          cargo=''
          empresa=''
          testimonio=''/>
          <Testimonio
          nombre=''
          pais=''
          imagen='shawn'
          cargo=''
          empresa=''
          testimonio=''/>
          <Testimonio
          nombre=''
          pais=''
          imagen='sarah'
          cargo=''
          empresa=''
          testimonio=''/>
      </div> */}
      <Counter countData={counter} />
      <Actions click1={handleClick1} click2={handleClick2} change={handleChange}/>

    </div>
  );
}

export default App;
