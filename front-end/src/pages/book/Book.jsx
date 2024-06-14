import sytle from './book.css'
import book from '../../assets/bookBlack.png'
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Table from '../../components/Table';
import Button from '../../components/Button';
import ActionsButtons from '../../components/ActionsButtons';


function Book(){
    
    return(
        <div>
            <SideBar/>
            <main className="listBook">
                <h1 className='titlePages'>Livros Disponíveis</h1>
                <Link to='/addBook'>
                    <Button description='Adicionar Livro' />
                </Link>
                <Table
                 col1=''
                 col2='Livro'
                 col3='Autor'
                 col4='Quantidade'
                 col5='Ações'
                >
                    <tr>
                       <td><img src={book} alt="Livro"/></td> 
                       <td>Livro Teste</td>
                       <td>Autor teste</td>
                       <td>XX</td>
                       <td>
                        <ActionsButtons color=' rgb(65, 189, 65)' description = 'Vender'/>
                        <ActionsButtons color='rgb(83, 167, 206)' description = 'Alugar'/>
                        <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>
                       </td>
                    </tr>
                    <tr>
                       <td><img src={book} alt="Livro"/></td> 
                       <td>Livro Teste</td>
                       <td>Autor teste</td>
                       <td>XX</td>
                       <td>
                        <ActionsButtons color=' rgb(65, 189, 65)' description = 'Vender'/>
                        <ActionsButtons color='rgb(83, 167, 206)' description = 'Alugar'/>
                        <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>
                       </td>
                    </tr>
                    <tr>
                       <td><img src={book} alt="Livro"/></td> 
                       <td>Livro Teste</td>
                       <td>Autor teste</td>
                       <td>XX</td>
                       <td>
                        <ActionsButtons color=' rgb(65, 189, 65)' description = 'Vender'/>
                        <ActionsButtons color='rgb(83, 167, 206)' description = 'Alugar'/>
                        <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>
                       </td>
                    </tr>
                    <tr>
                       <td><img src={book} alt="Livro"/></td> 
                       <td>Livro Teste</td>
                       <td>Autor teste</td>
                       <td>XX</td>
                       <td>
                        <ActionsButtons color=' rgb(65, 189, 65)' description = 'Vender'/>
                        <ActionsButtons color='rgb(83, 167, 206)' description = 'Alugar'/>
                        <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>
                       </td>
                    </tr>
                </Table>
            </main>
        </div>
    );
}

export default Book