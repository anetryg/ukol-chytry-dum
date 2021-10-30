import React from "react";
import Light from '../Light';

const Lights = ({light}) =>{
    
    return(
        <>
            <div className="lights">
            {light.map(roomLight => {return <div className="lightMap" key={roomLight.name}>
                    {<Light name={roomLight.name} 
                            state={roomLight.state} />}</div>})}
            </div>                          
        </>
        
    )

}

export default Lights;