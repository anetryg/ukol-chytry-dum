import React from "react";
import Light from '../Light';

const Lights = ({light}) =>{
    
    return(
        <>
            {light.map(roomLight => {return <div className="light" key={roomLight.name}>
                    {<Light name={roomLight.name} 
                            state={roomLight.state} />}</div>})}
                                       
        </>
        
    )

}

export default Lights;