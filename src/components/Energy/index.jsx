import React from "react";
import electricityImage from './images/electricity.svg'
import waterImage from './images/water.svg'

const Energy = ({electricity, water}) =>{
    return(
        <>
        <div className="energy">
            <div className="energy__source">
                <img className="energy__icon" src={electricityImage} />
                <div className="energy__consumption">
                    <div className="energy__value">
                        <div className="energy__description">Elektřina</div>{electricity} kW
                    </div>
                </div>
            </div>
            <div className="energy__source">
                <img className="energy__icon" src={waterImage} />
                <div className="energy__consumption">
                    <div className="energy__value">
                        <div className="energy__description">Voda</div>{water} m<sup>3</sup>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
} 

export default Energy;