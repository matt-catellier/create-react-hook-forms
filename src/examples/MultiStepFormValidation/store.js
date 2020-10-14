import {createContext} from 'react'

// context
export const MultiStepContext = createContext(null)

// actions 
export const update = (key, value) => ({type: 'SET_VALUE', payload: { key, value }})
export const reset = (key, value) => ({type: 'RESET' })

// reducer
export const initialState = {
    step1: {
        userName: '',
        password: '',
    },
    step2: {
        firstName: '',
        lastName: '',
    },
    step3: {
        job: '',
        age: '',
    }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
          ...state,
          [action.payload.key]: action.payload.value
        };
    case 'RESET': {
        return initialState
    }
    default:
      throw new Error();
  }
}

// selectors 
export const step1Selector = (state) => ({
    userName: state.step1.userName,
    password: state.step1.password
})

export const step2Selector = (state) => ({
    firstName: state.step2.firstName,
    lastName: state.step2.lastName
})

export const step3Selector = (state) => ({
    job: state.step3.job,
    age: state.step3.age
})

export const step4Selector = (state) => {
    const step1 = step1Selector(state)
    const step2 = step2Selector(state)
    const step3 = step3Selector(state)

    return {
        ...step1,
        ...step2,
        ...step3
    }
}