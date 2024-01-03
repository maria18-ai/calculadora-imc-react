import { useState } from 'react'
import Button from './Button'
import './ImcCalc.css'

export default function ImcCalc() {

    const [height, setHeight] = useState("");
    const [weight, setWeigth] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeigth("");
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9]/g, "");
    }

    const handleHeigthChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue);
    }

    const handleWeigthChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeigth(updateValue);
    }

    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control"></div>
                    <label htmlFor='height'>
                        Altura:
                    </label>
                    <input type="text" 
                        name='height'
                        id='height'
                        placeholder='Exemplo 1,75'
                        onChange={handleHeigthChange}
                        value={height}/>

                    <div className="form-control"></div>
                    <label htmlFor="weight">
                        Peso:
                    </label>
                    <input type="text" 
                        name='weight'
                        id='weight'
                        placeholder='Exemplo 70.5'
                        onChange={handleWeigthChange}
                        value={weight}/>
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular"/>
                    <Button id="clear-btn" text="Limpar" action={clearForm}/>
                </div>
            </form>
        </div>
    )
}
