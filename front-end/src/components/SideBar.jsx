import style from './sideBar.module.css'

import { Link } from 'react-router-dom'

function SideBar(){
    return(
        <nav style={style}>
            <ul>
                <li><Link to='/homePage'>Home</Link></li>
                {/* Se funcionario for do tipo gerente colocar uma condicional para liberar esse acesso */}
                <li><Link to='/employees'>Funcionários</Link></li>
                <li><Link to='/books'>Livros</Link></li>
                <li><Link to='/addBook'>Adicionar Livro</Link></li>
                <li><Link to='/clients'>Clintes</Link></li>
                <li><Link to='/addClient'>Adicionar cliente</Link></li>
                <li><Link to='/'>Sair</Link></li>

            </ul>
        </nav>
    );
}

export default SideBar