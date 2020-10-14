import React, { useReducer } from 'react' 

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'

import {MultiStepContext, reducer, initialState} from './store'


const FormValidation = () => {
    const [step, setStep] = React.useState(1)

    const style = {
        navItem: {
            padding: 10,
            marginRight: 2,
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer'
        }
    }

    const navigateTo = (to) => () => { setStep(to) }

    const submitFormData = (formData) => {
        console.log("FORMATTED DATA FOR POST TO SERVER", formData)
        navigateTo(1)()
    }

    const steps = {
        1: <Step1 onSubmit={navigateTo(2)}/>,
        2: <Step2 onSubmit={navigateTo(3)}/>,
        3: <Step3 onSubmit={navigateTo(4)} />, // submit all form data
        4: <Step4 onSubmit={submitFormData} />, // submit all form data
    }

    const [state, dispatch] = useReducer(reducer, initialState)
      return (
        <div>
          <div style={{ flexDirection: 'row', padding: 10 }}>
            <div style={style.navItem} onClick={navigateTo(1)}>1</div>
            <div style={style.navItem} onClick={navigateTo(2)}>2</div>
            <div style={style.navItem} onClick={navigateTo(3)}>3</div>
            <div style={style.navItem} onClick={navigateTo(4)}>4</div>
          </div>
          <div>
              <MultiStepContext.Provider value={{state, dispatch}}>
                {steps[step]}
              </MultiStepContext.Provider>
          </div>
        </div>
      )
}

export default FormValidation