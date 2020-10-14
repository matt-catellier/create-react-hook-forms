import React from 'react' 
import {useForm} from 'react-hook-form'

const FormValidation = () => {
    const { register, handleSubmit, errors} = useForm()
    const submitHandler = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div style={{display: 'block'}}>
                    <label htmlFor="username">username:</label>
                    <input id="username" name="username" ref={register({ required: 'This field is required' })} />
                    {errors.username && <span style={{color: 'red'}}>{errors.username.message}</span>}
                </div>
                <div style={{display: 'block'}}>
                    <label htmlFor="password">password:</label>
                    <input 
                        id="password"
                        name="password" 
                        ref={register({ 
                            required: 'This field is required',
                            minLength: {
                                value: 8,
                                message: 'TOO SHORT'
                            }
                        })} 
                    />
                    {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
                 </div>
                 <input type="submit" />
            </form>
        </div>
    )
}

export default FormValidation