import React, { useContext } from 'react' 
import {useForm} from 'react-hook-form'

import {MultiStepContext, step2Selector, update} from './store'

const Step2 = ({onSubmit}) => {
    const {state, dispatch} = useContext(MultiStepContext)
    const data = step2Selector(state)
    const { register, handleSubmit, errors} = useForm({
        defaultValues: {...data}
    })
    const submitHandler = (data) => { 
        dispatch(update('step2', data))
        onSubmit()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{display: 'block'}}>
                    <label htmlFor="firstName">First name:</label>
                    <input id="firstName" name="firstName" ref={register({ required: 'This field is required' })} />
                    {errors.firstName && <span style={{color: 'red'}}>{errors.firstName.message}</span>}
                </div>
                <div style={{display: 'block'}}>
                    <label htmlFor="lastName">Last name:</label>
                    <input id="lastName" name="lastName" ref={register({ required: 'This field is required' })} />
                    {errors.lastName && <span style={{color: 'red'}}>{errors.lastName.message}</span>}
                </div>
                 <input type="submit" />
            </form>
        </div>
    )
}

export default Step2