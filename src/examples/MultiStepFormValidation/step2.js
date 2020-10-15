/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react' 
import {useForm} from 'react-hook-form'

import {MultiStepContext, step2Selector, update} from './store'

const Step2 = ({goForward, goBack}) => {
    const {state, dispatch} = useContext(MultiStepContext)
    const data = step2Selector(state)
    const { register, handleSubmit, errors, getValues} = useForm({
        defaultValues: {...data}
    })
    const submitHandler = (data) => { 
        dispatch(update('step2', data))
        goForward()
    }

    React.useEffect(() => {
        return () => {
            dispatch(update('step2', getValues()))
        }
    }, [])
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
                <input type="button" value="Go back" onClick={goBack} />
                <input type="submit" value="Next step" />
            </form>
        </div>
    )
}

export default Step2