import React from 'react';
import styles from './addbooks.css'
import SideBar from '../../components/SideBar';
import Form from '../../components/Form';
import { useNavigate } from 'react-router-dom';

function AddBook(){
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            title: event.target.title.value,
            author: event.target.author.value,
            genre: event.target.genre.value,
            year: event.target.year.value,
            price: event.target.price.value
        };

        try {
            const response = await fetch('http://localhost:3000/book/newBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar o livro');
            }

            const data = await response.json();
            console.log('Livro criado com sucesso:', data);
            navigate('/books');

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return(
        <div>
            <SideBar/>
            <main className='formToAddBook'>
                <h1 className='titlePages'>Adicionar um novo Livro</h1>
                <Form onSubmit={handleFormSubmit}>
                    <label htmlFor="title">Titulo do livro</label>
                    <input type="text" name='title' required/>
                    <label htmlFor="author">Autor do livro</label>
                    <input type="text" name='author' required/>
                    <label htmlFor="genre">Gênero</label>
                    <input type="text" name='genre' required />
                    <label htmlFor="">Ano lançamento</label>
                    <input type="text"  name='year' required/>
                    <label htmlFor="price">Valor</label>
                    <input type="text" name='price' required/>
                    <button type='submit'>Criar</button>
                </Form>
                
            </main>
        </div>
    )
}

export default AddBook;
