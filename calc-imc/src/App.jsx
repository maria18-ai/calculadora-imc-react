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

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max ) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });

    if (!info) return;
  };

  const reseltCalc = (e) => {

    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  return (
    <div className='container'>

      {!imc ? (
        <ImcCalc calcImc={calcImc}/>
      ) : (
        <ImcTable 
        data={data} 
        imc={imc} 
        info={info} 
        infoClass={infoClass}
        resetCalc={reseltCalc}
        />
      )}

    </div>
  )
}

export default App
