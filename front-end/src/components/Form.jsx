import styles from './form.css'


function Form({ children, onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        onSubmit(event);  
    };

    return (
        <form className="formAdd"  onSubmit={handleSubmit}>
            {children}
        </form>
    )
}

export default Form;