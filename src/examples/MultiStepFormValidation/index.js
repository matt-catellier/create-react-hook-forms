import React, { useReducer } from 'react' 

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'

import {MultiStepContext, reducer, initialState} from './store'

const style = {
  navItem: {
      padding: 10,
      marginRight: 2,
      backgroundColor: 'grey',
      color: 'white',
      cursor: 'pointer'
  }
}


const FormValidation = () => {
    const [currentStep, setCurrentStep] = React.useState(1)
    const [completedStepsTo, setCompletedStepsTo ] = React.useState(0)

    const navigateTo = (stepTo) => () => {
      if(stepTo <= completedStepsTo + 1) {
        setCurrentStep(stepTo) 
      }      
    }

    const goForward = () => {
      if(currentStep !== 4) {
        setCompletedStepsTo(currentStep)
        setCurrentStep(currentStep + 1)
      }
    }

    const goBack= () => {
      if(currentStep !== 1) {
        setCurrentStep(currentStep + -1)
      }
    }

    const steps = {
        1: <Step1 goForward={goForward} />,
        2: <Step2 goForward={goForward} goBack={goBack} />,
        3: <Step3 goForward={goForward} goBack={goBack} />, // submit all form data
        4: <Step4 goBack={goBack} />, // submit all form data
    }

    const [state, dispatch] = useReducer(reducer, initialState)
      return (
        <div>
          <div style={{ flexDirection: 'row', padding: 10 }}>
            <div onClick={navigateTo(1)} style={{...style.navItem,backgroundColor: currentStep === 1 ? 'green' : 'gray'}} >1</div>
            <div onClick={navigateTo(2)} style={{...style.navItem,backgroundColor: currentStep === 2 ? 'green' : 'gray'}} >2</div>
            <div onClick={navigateTo(3)} style={{...style.navItem,backgroundColor: currentStep === 3 ? 'green' : 'gray'}} >3</div>
            <div onClick={navigateTo(4)} style={{...style.navItem,backgroundColor: currentStep === 4 ? 'green' : 'gray'}} >4</div>
          </div>
          <div>
              <MultiStepContext.Provider value={{state, dispatch}}>
                {steps[currentStep]}
              </MultiStepContext.Provider>
          </div>
        </div>
      )
}

export default FormValidation