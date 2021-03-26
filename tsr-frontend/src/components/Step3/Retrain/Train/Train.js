import React from 'react'
import axios from 'axios'

import './Train.css'

function Train(props) {

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value)

        const data = {}
        const formData = new FormData()
        data['batch_size'] = parseFloat(e.target[0].value)
        formData.append('batch_size', parseFloat(e.target[0].value))
        data['epochs'] = parseFloat(e.target[1].value)
        formData.append('epochs', parseFloat(e.target[1].value))

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
        axios.post(`${url}/train_model`, formData, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="train">
            <header>
                <h4>Train</h4>
            </header>
            <form className="train_inputs" onSubmit={(e) => handleSubmit(e)}>
                <div className="train_input">
                    <label htmlFor="batch_size">batch_size</label>
                    <input type="number" defaultValue="64" step="any" name="batch_size" id="batch_size" />
                </div>
                <div className="train_input">
                    <label htmlFor="epochs">epochs</label>
                    <input type="number" defaultValue="3" step="any" name="epochs" id="epochs" />
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Train
