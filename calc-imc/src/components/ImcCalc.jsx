import React from 'react'

export default function ImcCalc() {
    return (
        <div id='calc-container'>
            <h2>Calculadora de IMC</h2>

            <form id="imc-form">

                <div className="form-inputs">
                    <div className="form-control"></div>
                    <label htmlFor="height">
                        <span>Altura:</span>
                        <input type="text" 
                        name='height'
                        id='height'
                        placeholder='Exemplo 1,75'/>
                    </label>

                    <div className="form-control"></div>
                    <label htmlFor="weight">
                        <span>Peso:</span>
                        <input type="text" 
                        name='weight'
                        id='weight'
                        placeholder='Exemplo 70.5'/>
                    </label>
                </div>

                <div className="action-control">
                    <button>Calcular</button>
                    <button>Limpar</button>
                </div>
            </form>
        </div>
    )
}
