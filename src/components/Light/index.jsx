import React, {useState} from "react";
import lightOffImage from './images/light-off.svg'
import lightOnImage from './images/light-on.svg'


const Light = ({name, state}) =>{

    let state2

    if (state === 'on'){
        state2 = true
    } else {
        state2 = false
    }


    const [handleLight, sethadleLight] = useState(state2)

    const on = () => {
		sethadleLight(true)
	}

	const off = () => {
		sethadleLight(false)
	}

    return(
        
        <>
            <div className="light">
				<div className="light__icon">
                    <img src={handleLight ? lightOnImage : lightOffImage}/>
				</div>
                <div className="light__name">
                    <button className="button" onClick={handleLight ? off : on}>
                        {name}
                    </button>		
				</div>
            </div>
        </>
    )
}

export default Light;