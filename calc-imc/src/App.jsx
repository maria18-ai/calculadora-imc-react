import ImcCalc from './components/ImcCalc'
import {data} from './data/data'
import './App.css'
import { useState } from 'react'
import ImcTable from './components/ImcTable';

function App() {

  const [imc, setImc] = useState ("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcImc = (e, height, weigth) => {
    e.preventDefault();

    if (!weigth || !height) return;

    const weightFloat = +weigth.replace(",", ".");
    const heigthFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heigthFloat * heigthFloat)).toFixed(1)

    setImc(imcResult);
  }

  return (
    <div className='container'>

      {!imc ? (
        <ImcCalc calcImc={calcImc}/>
      ) : (
        <ImcTable/>
      )}

    </div>
  )
}

export default App
