import styles from './addClient.css'
import Form from "../../components/Form";
import SideBar from "../../components/SideBar";
import { useNavigate } from 'react-router-dom';


function AddClient(){
    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            contact: event.target.contact.value,
            address: event.target.address.value,
        };

        try {
            const response = await fetch('http://localhost:3000/client/createClient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar cliente');
            }

            const data = await response.json();
            console.log('Cliente criado com sucesso:', data);
            navigate('/clients'); // Redireciona para a página de clientes

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
        }
    };

    return(
        <div>
            <SideBar/>
            <main className='formToAddClients'>
                <h1 className='titlePages'>Cadastra Cliente</h1>
                <Form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" name='name' required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                    <label htmlFor="contact">Telefone</label>
                    <input type="text" name='contact' required/>
                    <label htmlFor='address'>Endereço</label>
                    <input type="text" name='address' required/>
                    <button type='submit'>Criar</button>
                </Form>
            </main>
        </div>
    );
}

export default AddClient;