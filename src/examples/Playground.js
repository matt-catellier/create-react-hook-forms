import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const style = {
    section: {
        display: 'inline-block',
        width: 400,
        minHeight: 300,
        margin: 10

    },
    pre: {
        flexGrow: 0,
        minWidth: 200,
        background: '#F0F0F0',
        textAlign: 'left'
    }
}

const Link = ({href, text, newTab = false}) => <a href={href} target={newTab ? '_blank' : null} rel="noopener noreferrer">{text}</a>

const Playground = () => {  
    const { register, handleSubmit, getValues, formState, errors, reset, watch } = useForm()
    const [ submittedData, setSubmittedData ] = useState()
    const submitHandler = data => {  setSubmittedData(data) }
    const resetHandler = data => {  reset() }

    let formStateString
    if(!Object.keys(formState.errors).length) {
        formStateString = JSON.stringify(formState, null, '\t')
    } else {
        const formStateErrors = Object.entries(formState.errors).reduce((acc, obj) => {
            const [key, value] = obj
            if(typeof value.ref !== 'string') {
                value.ref = 'React.RefObject'
            }
            acc[key] = {...value, ref: value.ref.name}
            return acc
        }, {})
        let tempFormState = {...formState, errors: formStateErrors}
        tempFormState.errors = formStateErrors
        formStateString = JSON.stringify(tempFormState, null, '\t')
    }
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <input name="example" defaultValue="test" ref={register} />
                    <input name="exampleRequired" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input type="submit" />
                    <input type="reset" onClick={resetHandler} />
                </form>
            </div>
            <div style={{flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={style.section}>
                    <div>
                        <Link
                            text="getValues"
                            href="https://react-hook-form.com/api#getValues" 
                            newTab
                        />
                    </div>
                    <div>
                        <pre style={style.pre}>
                            {JSON.stringify(getValues(), null, '\t')}
                        </pre>
                    </div>
                </div>
                <div style={style.section}>
                    <div>
                        <Link text="submittedData" href="/#" />
                    </div>
                    <div>
                        <pre style={style.pre}>
                            {JSON.stringify(submittedData, null, '\t')}
                        </pre>
                    </div>
                </div>
                <div style={style.section}>
                    <div><a href="https://react-hook-form.com/api#errors">errors</a></div>
                    <div>
                        <pre style={style.pre}>
                            {JSON.stringify(errors, null, '\t')}
                        </pre>
                    </div>
                </div>
                <div style={style.section}>
                    <div><a href="https://react-hook-form.com/api#formState">formState</a></div>
                    <div>
                        <pre style={style.pre}>
                            {formStateString}
                        </pre>
                    </div>
                </div>

                <div style={style.section}>
                    <div><a href="https://react-hook-form.com/api#watch">watch</a></div>
                    <div>
                        <div style={style.pre}>
                            <div>example: {watch('example')}</div>
                            <div>exampleRequired: {watch('exampleRequired')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Playground