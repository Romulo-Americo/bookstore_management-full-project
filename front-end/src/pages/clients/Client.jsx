import styles from './clients.css'
import user from '../../assets/userBlack.png'
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Button from '../../components/Button';
import Table from '../../components/Table';
import ActionsButtons from '../../components/ActionsButtons';



function Clients(){
    return(
        <div>
            <SideBar/>
            <main className='listClients'>
                <h1 className='titlePages'>Lista de Clientes</h1>
                <Link to='/addClient'>
                    <Button description='Adicionar Cliente' />
                </Link>
                <Table
                    col1=''
                    col2='Cliente'
                    col3='Matrícula'
                    col4='Pontos'
                    col5='Ações'
                >
                    <tr>
                    <td><img src={user} alt="user"/></td>
                    <td>Cliente Teste</td>
                        <td>00.000-0</td>
                        <td>XX</td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='+ pontos'/>
                            <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>                           
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                    <td><img src={user} alt="user"/></td>
                    <td>Cliente Teste</td>
                        <td>00.000-0</td>
                        <td>XX</td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='+ pontos'/>
                            <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>                           
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                    <td><img src={user} alt="user"/></td>
                    <td>Cliente Teste</td>
                        <td>00.000-0</td>
                        <td>XX</td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='+ pontos'/>
                            <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>                           
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                    <tr>
                    <td><img src={user} alt="user"/></td>
                    <td>Cliente Teste</td>
                        <td>00.000-0</td>
                        <td>XX</td>
                        <td>
                            <ActionsButtons color='rgb(65, 189, 65)' description='+ pontos'/>
                            <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>                           
                            <ActionsButtons color='rgb(238, 84, 84)' description='Excluir'/>
                        </td>
                    </tr>
                </Table>

            </main>

        </div>
    );
}

export default Clients