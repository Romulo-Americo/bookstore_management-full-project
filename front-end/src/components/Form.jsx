import styles from './form.css'


function Form({label1, label2, label3, children, action}) {
    return (
        <form className="formAdd">
            <label htmlFor="">{label1}</label>
            <input type="text" />
            <label htmlFor="">{label2}</label>
            <input type="text"/>
            <label htmlFor="">{label3}</label>
            <input type="text" />
            {children}
            <button>{action}</button>
        </form>
    )
}

export default Form 