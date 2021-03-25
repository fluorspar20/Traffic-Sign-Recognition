import React from 'react'
import axios from 'axios'

import './Segregation.css'

function Segregation(props) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)

        const data = {}
        const formData = new FormData()
        data['test_size'] = parseFloat(e.target[0].value)
        formData.append('test_size', parseFloat(e.target[0].value))
        data['segregation_type'] = e.target[1].value
        formData.append('segregation_type', e.target[1].value)

        console.log(data)

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                // 'CORS_SUPPORTS_CREDENTIALS': 'true',
                'Access-Control-Allow-Credentials': 'true'
            },
            withCredentials: true,
            crossorigin: true,
        }

        const url = props.url
        axios.post(`${url}/retrain_segregate`, formData, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="segregation">
            <header>
                <h4>Segregation</h4>
            </header>
            <form onSubmit={(e) => handleSubmit(e)} className="segregation_inputs">
                <div className="segregation_input">
                    <label htmlFor="test_size">Enter Test Size</label>
                    <input type="number" min="0" max="1" step="any" name="test_size" id="test_size" />
                </div>
                <div className="segregation_input">
                    <label htmlFor="segregation_type">Select Type of Segregation</label>
                    <select name="select-segregation-type" id="select-segregation-type">
                        <option value="Normal"> Normal </option>
                        <option value="Stratified"> Stratified </option>
                        <option value="Difficult_samples"> Difficult_Samples </option>
                        <option value="kennard_stone"> kennard_stone </option>
                    </select>
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Segregation
