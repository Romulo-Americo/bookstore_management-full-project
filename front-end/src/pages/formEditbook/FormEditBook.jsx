import FormActions from "../../components/FormActions";
import bookImage from "../../assets/bookBlack.png"
import { useNavigate } from 'react-router-dom';


function FormEditBook(){
    const navigate = useNavigate();
    const close = (e) =>{
        e.preventDefault();
        navigate('/books')
    }
    return(
        <FormActions>
            <img src={bookImage} alt="book" />
            <button onClick={close}>X</button>
            <p>Nome Livro</p>
            <p>Ano de lançamento</p>
            <p>Autor</p>
            <p>Pontução</p>
            <label htmlFor="">Matricula do Cliente</label>
            <input type="text" />
            <button>Alugar</button>
        </FormActions>
    );
}

export default FormEditBook;