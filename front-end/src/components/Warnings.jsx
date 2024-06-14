import button from '../assets/buttonRed.png'
import styles from './warning.css'

function Warnigs(props){
    return(
        <div className='warningGrid'>
            <h2>{props.typeWarning}</h2>
            <h3>{props.title}</h3>
            <section className='information'>
                <img className='ico' src={props.image} alt="Teste" />
                <p className='situation'>{props.content} </p>
                <img className='buttonSituation' src={button} alt="button"/>

            </section>
        </div>
    )
}

export default Warnigs