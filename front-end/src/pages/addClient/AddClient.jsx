import styles from './addClient.css'
import Form from "../../components/Form";
import SideBar from "../../components/SideBar";


function AddClient(){
    return(
        <div>
            <SideBar/>
            <main className='formToAddClients'>
                <h1 className='titlePages'>Cadastra Cliente</h1>
                <Form
                       label1='Nome'
                       label2='Email'
                       label3='Telefone'
                       action='Criar'
                >
                <label htmlFor="">Endereço</label>
                <input type="text" />
                </Form>
            </main>
        </div>
    );
}

export default AddClient;