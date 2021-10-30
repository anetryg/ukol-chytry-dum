import React, { useState} from "react";
import tempImage from './images/temp.svg'


const Climate = ({temperature, humidity}) =>{

    const [handleClimate, sethadleClimate] = useState(temperature)

    const temperaturePlus = () =>{
        sethadleClimate(handleClimate + 1)
    }

    const temperatureMinus = () =>{
        sethadleClimate(handleClimate - 1)
    }

    return(
        <>
            <div className="climate">
                <img className="climate__icon"src={tempImage} />
                <div className="climate__content">
                    <p className="climate__temperature">{handleClimate}&deg;C</p>
                    <div className="climate__humidity">Vlhkost vzduchu {humidity}&nbsp;%</div>
                </div>
                <div className="climate__controls">
                    <button className="button" onClick={temperaturePlus}>+</button>
                    <button className="button" onClick={temperatureMinus}>-</button>
                </div>
                
            </div>
        </>
    )
}

export default Climate;