import React from "react";
import Lights from '../Lights'
import Climate from '../Climate'
import Blinds from '../Blinds'
import Energy from '../Energy'

const Dashboard = ({data}) => {
    return(
        <>
        <div className="dashboard">
            <Lights light={data.lights}/>
            <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
            <Blinds state={data.blinds}/>
            <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
        </div>
        </>
    )
}

export default Dashboard;