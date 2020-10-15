import React, { useContext } from 'react' 
import {useForm} from 'react-hook-form'

import {MultiStepContext, step3Selector, update} from './store'

const Step3 = ({ goForward, goBack }) => {
    const {state, dispatch} = useContext(MultiStepContext)
    const data = step3Selector(state)
    const { register, handleSubmit, errors, getValues} = useForm({
        defaultValues: {...data}
    })
    const submitHandler = (data) => {
        dispatch(update('step3', data))
        goForward()
    }

    React.useEffect(() => {
        return () => {
            dispatch(update('step3', getValues()))
        }
    }, [dispatch, getValues])
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{display: 'block'}}>
                    <label htmlFor="job">job:</label>
                    <input id="job" name="job" ref={register({ required: 'This field is required' })} />
                    {errors.job && <span style={{color: 'red'}}>{errors.job.message}</span>}
                </div>
                <div style={{display: 'block'}}>
                    <label htmlFor="age">age:</label>
                    <input id="age" name="age" ref={register({ required: 'This field is required' })} />
                    {errors.age && <span style={{color: 'red'}}>{errors.age.message}</span>}
                </div>
                <input type="button" value="Go back" onClick={goBack} />
                <input type="submit" value="Next step" />
            </form>
        </div>
    )
}

export default Step3