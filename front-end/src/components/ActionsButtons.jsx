import styles from './actionButtons.css'

function ActionsButtons({color, description, onClick}){
    return(
        <button className='actionbuttons' style={{ backgroundColor: color }} onClick={onClick}>
            {description}
        </button>
    );
}

export default ActionsButtons;