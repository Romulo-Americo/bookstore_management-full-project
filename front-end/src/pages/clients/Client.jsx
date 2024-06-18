import styles from './clients.css'
import user from '../../assets/userBlack.png'
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Button from '../../components/Button';
import Table from '../../components/Table';
import ActionsButtons from '../../components/ActionsButtons';
import { useEffect, useState } from 'react';



function Clients(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/client/readClient')
            .then((res) => res.json())
            .then((data) => {
                const dataList = data.map(item => ({
                    name: item.name,
                    registration: item.registration,
                    points: item.points,
                    client_id: item.client_id 
                }));
                setData(dataList);
            })
            .catch((err) => {
                console.log(`Error ao listar os clientes: ${err}`);
            });
    }, []);

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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><img src={user} alt="user" /></td>
                            <td>{item.name}</td>
                            <td>{item.registration}</td>
                            <td>{item.points}</td>
                            <td>
                                <ActionsButtons color='rgb(65, 189, 65)' description='+ pontos'/>
                                <ActionsButtons color='rgb(250, 143, 71)' description = 'Editar'/>
                                <ActionsButtons color='rgb(238, 84, 84)' description='Excluir' />
                            </td>
                        </tr>
                    ))}
                </Table>

            </main>

        </div>
    );
}

export default Clients