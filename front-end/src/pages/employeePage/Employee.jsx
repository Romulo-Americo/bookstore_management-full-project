import React, { useState, useEffect } from 'react';
import style from './employee.css';
import user from '../../assets/userBlack.png';
import activate from '../../assets/buttonBlue.png';
import blocked from '../../assets/buttonRed.png';
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Table from '../../components/Table';
import Button from '../../components/Button';
import ActionsButtons from '../../components/ActionsButtons';

function Employee() {
    const [data, setData] = useState([]);
    const [active, setActive] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/employee/listEmployees')
            .then((res) => res.json())
            .then(data => {
                const dataList = data.map(item => ({
                    name: item.name,
                    registration: item.registration,
                    situation: item.situation
                }));
                setData(dataList);
            })
            .catch((err) => {
                console.log(`Error ao listar os usuários ${err}`);
            });
    }, []);

    const handleActive = (employee_id) => {
        fetch(`http://localhost:3000/employee/unblock/${employee_id}`, { method: 'POST' })
            .then(() => {
                // Atualiza a lista de funcionários após a mudança na API
                fetch('http://localhost:3000/employee/listEmployees')
                    .then(res => res.json())
                    .then(data => setData(data))
                    .catch(err => console.log(`Error ao listar os usuários: ${err}`));
            })
            .catch(err => {
                window.alert('Erro ao desbloquear usuário');
                console.log(err);
            });
    }

    return (
        <div>
            <SideBar />
            <main className="listEmployee">
                <h1 className='titlePages'>Lista de funcionários</h1>
                <Link to='/addEmployee'>
                    <Button description='Adicionar Funcionário' />
                </Link>
                <Table
                    col1=''
                    col2='Nome'
                    col3='Matrícula'
                    col4='Situação'
                    col5='Ações'
                >
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><img src={user} alt="user" /></td>
                            <td>{item.name}</td>
                            <td>{item.registration}</td>
                            <td>
                                {item.situation ? (
                                    <img className='situationUser' src={activate} alt="Ativo" />
                                ) : (
                                    <img className='situationUser' src={blocked} alt="Bloqueado" />
                                )}
                            </td>
                            <td>
                                <ActionsButtons color='rgb(65, 189, 65)' description='Ativar' onClick={() => handleActive(item.employee_id)} />
                                <ActionsButtons color='rgb(238, 84, 84)' description='Excluir' />
                            </td>
                        </tr>
                    ))}
                </Table>
            </main>
        </div>
    );
}

export default Employee;
