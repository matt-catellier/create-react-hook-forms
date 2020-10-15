import React, { useContext } from 'react' 
import { useForm } from 'react-hook-form'

import { MultiStepContext, step1Selector, update } from './store'

const FormValidation = ({goForward}) => {
    const {state, dispatch} = useContext(MultiStepContext)
    const data = step1Selector(state)
    const { register, handleSubmit, errors} = useForm({
        defaultValues: {...data}
    })
    const submitHandler = (formData) => {
        dispatch(update('step1', formData))
        goForward()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{display: 'block'}}>
                    <label htmlFor="userName">User name:</label>
                    <input id="userName" name="userName" ref={register({ required: 'This field is required' })} />
                    {errors.userName && <span style={{color: 'red'}}>{errors.userName.message}</span>}
                </div>
                <div style={{display: 'block'}}>
                    <label htmlFor="password">password:</label>
                    <input 
                        id="password"
                        name="password" 
                        ref={register({ 
                            required: 'This field is required',
                            minLength: {
                                value: 2,
                                message: 'TWO SHORT'
                            }
                        })} 
                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                 </div>
                 <input type="submit" value="Next step" />
            </form>
        </div>
    )
}

export default FormValidation