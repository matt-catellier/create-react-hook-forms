import React, { useContext } from 'react' 

import {MultiStepContext} from './store'

const Step4 = ({goBack}) => {
    const [postedData, setPostedData] = React.useState({})
    const {state} = useContext(MultiStepContext)

    const submitHandler = () => {
        const transformData = (formData) => ({
            userName: state.step1.userName,
            password: state.step1.password,
            firstName: state.step2.firstName,
            lastName: state.step2.lastName,
            job: state.step3.job,
            age: state.step3.age,
        })
        setPostedData(transformData(state))
    }

    return (
        <div>
            <div style={{textAlign: 'left'}}>
                <div style={{flexDirection: 'row'}}>
                    <div>
                        <h1>All steps data in store</h1>
                        <pre>
                            {JSON.stringify(state, null, '\t')}
                        </pre>
                    </div>
                    <div style={{height: '100%'}}>
                        <h1> Data posted to server </h1>
                        <pre>
                            {JSON.stringify(postedData, null, '\t')}
                        </pre>
                    </div>
                </div>
                <input type="button" value="Go back" onClick={goBack} />
                <button type="submit" onClick={submitHandler}> SUBMIT </button>
            </div>
        </div>
    )
}

export default Step4