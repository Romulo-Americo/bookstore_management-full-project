import styles from './addEmployee.css'
import Form from "../../components/Form";
import SideBar from "../../components/SideBar";


function AddEmployee(){
    return(
        <div>
            <SideBar/>
            <main className='formToAddClients'>
                <h1 className='titlePages'>Cadastra Funcionário</h1>
                <Form
                       label1='Nome'
                       label2='Email'
                       label3='Tipo funcionário'
                       action='Criar'
                />
            </main>
        </div>
    );
}

export default AddEmployee;