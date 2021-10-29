import React, { useState } from "react";


const Blinds = ({state}) =>{

    //const = useState()

    let state2

    if ({state} === 'open'){
        state2 = true
    }else{
        state2 = false
    }

    return(
        <>
            <p>Žaluzie</p>
            <button>Otevřeno</button>
            <button>Zavřeno</button>
        </>
    )
}

export default Blinds;
