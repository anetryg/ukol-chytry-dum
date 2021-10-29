import React, { useState} from "react";

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
            <button onClick={temperaturePlus}>+</button>
            <p>{handleClimate} stupnu {humidity}</p>
            <button onClick={temperatureMinus}>-</button>
        </>
    )
}

export default Climate;