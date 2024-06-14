import styles from './homePage.css'
import imageUser from '../../assets/user.png'
import imageBook from '../../assets/bookRed.png'

import SideBar from '../../components/SideBar';
import Warnings from '../../components/Warnings';

function HomePage() {
  return (
    <div className='welcomePage'>
      <SideBar/>
      <main className='mainFront'>
        <h1 className='titlePages'>Bem vindo FUNCIONÁRIO</h1>
        
        <section className='sectionGrid'>
          <Warnings 
            typeWarning='Clientes com atraso'
            title='NOME CLIENTE'
            image={imageUser}
            content='XX dias de atraso'
          />
           <Warnings
            typeWarning='Livros com biaxo estoque'
             title='NOME LIVRO'
             image={imageBook}
             content='XX no estoque'
           />
          <Warnings
           typeWarning='Clientes com atraso'
            title='NOME CLIENTE'
           image={imageUser}
           content='XX dias de atraso'
          />
          <Warnings
           typeWarning='Livros com biaxo estoque'
            title='NOME LIVRO'
            image={imageBook}
            content='XX no estoque'
          />
          <Warnings
           typeWarning='Clientes com atraso'
            title='NOME CLIENTE'
           image={imageUser}
           content='XX dias de atraso'
          />
          <Warnings
           typeWarning='Livros com biaxo estoque'
            title='NOME LIVRO'
            image={imageBook}
            content='XX no estoque'
          />
        </section>
        
      </main>
    </div>
  );
}

export default HomePage;
