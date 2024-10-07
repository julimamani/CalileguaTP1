import React from 'react';

const Home =() =>{
    return(
        <main className="pure-g pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
        <div className="pure-u-1">
          <h1>Hola, soy JULIETA A. MAMANI</h1>
          <p>Desarrollador/a Frontend, Analista y Diseñadora</p>
          
          <h2>Tecnologías que manejo:</h2>
          <ul className="pure-list">
            <li className="pure-item">Angular, SpringBoot</li>
            <li className='pure-item'>JavaScript, C++, Java</li>
            <li className='pure-item'>CSS</li>
          </ul>
  
          <h2>Lo que estoy aprendiendo:</h2>
          <p>Curso de Calilegua en Frontend, con Typescript y React</p>
        </div>
      </main>
    );
};

export default Home;