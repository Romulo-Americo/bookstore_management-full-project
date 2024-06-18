import React, { useState } from 'react';
import styles from './addEmployee.css';
import Form from "../../components/Form";
import SideBar from "../../components/SideBar";
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const navigate = useNavigate();
    const [typeEmployee, setTypeEmployee] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            typeEmployee: event.target.typeEmployee.value
        };

        if (formData.typeEmployee.toLowerCase() === 'gerente') {
            formData.typeEmployee_id = 1; // Use o nome do campo correto aqui
        } else {
            formData.typeEmployee_id = 2; // Use o nome do campo correto aqui
        }

        try {
            const response = await fetch('http://localhost:3000/employee/newEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar funcionário');
            }

            const data = await response.json();
            console.log('Funcionário criado com sucesso');
            navigate('/employees');

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return (
        <div>
            <SideBar />
            <main className='formToAddClients'>
                <h1 className='titlePages'>Cadastrar Funcionário</h1>
                <Form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name='name' required />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                    <label htmlFor="typeEmployee">Tipo de funcionário</label>
                    <input type="text"
                        name='typeEmployee'
                        required
                        value={typeEmployee}
                        onChange={(e) => setTypeEmployee(e.target.value)}
                    />
                    <button type='submit'>Criar</button>
                </Form>
            </main>
        </div>
    );
}

export default AddEmployee;
