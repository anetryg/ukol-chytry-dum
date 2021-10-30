import React, { useState } from "react";
import blindsOpenImage from './images/blinds-open.svg'
import blindsCloseImage from './images/blinds-closed.svg'

const Blinds = ({state}) =>{

    let state2

    if ({state} === 'open'){
        state2 = true
    }else{
        state2 = false
    }

    const [handleBlinds, sethandleBlins] = useState(state2)

    const setOn = () =>{
        sethandleBlins(true)
    }

    const setOff = () =>{
        sethandleBlins(false)
    }

    return(
        <>
        <div className="blinds">
            <img className="blinds__icon" src={handleBlinds ? blindsOpenImage : blindsCloseImage}/>
            <p className="blinds__name">Žaluzie</p>
            <div className="blinds__controls">
                <button className={handleBlinds ? "button button--active" : "button"}  onClick={setOn}>Otevřeno</button>
                <button  className={handleBlinds ? "button" : "button button--active"} onClick={setOff}>Zavřeno</button>
            </div>
        </div>
        </>
    )
}

export default Blinds;
