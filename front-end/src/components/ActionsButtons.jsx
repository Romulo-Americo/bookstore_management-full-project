import styles from './actionButtons.css'

function ActionsButtons({color, description}){
    return(
        <button className='actionbuttons' style={{ backgroundColor: color }}>{description}</button>
    );
}

export default ActionsButtons;