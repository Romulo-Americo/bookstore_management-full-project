import sytle from './book.css'
import book from '../../assets/bookBlack.png'
import { Link } from 'react-router-dom';

import SideBar from "../../components/SideBar";
import Table from '../../components/Table';
import Button from '../../components/Button';
import ActionsButtons from '../../components/ActionsButtons';
import { useEffect, useState } from 'react';


function Book(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/book/listBooks')
            .then((res) => res.json())
            .then((data) => {
                const dataList = data.map(item => ({
                    title: item.title,
                    author: item.author,
                    quantity: item.quantity,
                    book_id: item.book_id 
                }));
                setData(dataList);
            })
            .catch((err) => {
                console.log(`Error ao listar os livros: ${err}`);
            });
    }, []);

    
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
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td><img src={book} alt="user" /></td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <ActionsButtons color='rgb(83, 167, 206)' description = 'Alugar'/>
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

export default Book