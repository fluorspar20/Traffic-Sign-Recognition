import React from 'react'

import Preprocessing from './Preprocessing/Preprocessing'
import SelectModel from './SelectModel/SelectModel'
import './Predict.css'

function Predict(props) {
    return (
        <div className="predict">
            <Preprocessing url={props.url} />
            <SelectModel url={props.url} />
        </div>
    )
}

export default Predict
