import styles from './formActions.css'


function FormActions({ onSubmit, children }){
    return(
        <form className='formActions' onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default FormActions;