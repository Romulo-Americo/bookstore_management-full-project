import styles from './button.css'

function Button(prop){
    return(
        <button className='button'><a href="#">{prop.description}</a></button>
    );
}

export default Button