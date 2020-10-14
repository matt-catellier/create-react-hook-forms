import React, { useContext } from 'react' 

import {MultiStepContext, step4Selector} from './store'

const Step4 = ({onSubmit}) => {
    const {state} = useContext(MultiStepContext)
    const data = step4Selector(state)

    const submitHandler = () => {
        onSubmit(data)
    }
    return (
        <div style={{textAlign: 'left'}}>
            <h1> All steps data </h1>
            <pre>
                {JSON.stringify(state, null, '\t')}
            </pre>
            <button type="submit" onClick={submitHandler}> SUBMIT </button>
        </div>
    )
}

export default Step4