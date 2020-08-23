import React from 'react';

import Banner from '../Banner';
import ScrollUp from '../ScrollUp';
import Sobre from '../Sobre';
import Escolaridade from '../Escolaridade';
import Projetos from '../Projetos';
import Contato from '../Contato';
import Footer from '../Footer';

function Home() {
  return (
    <div className="home" id="home">
        <Banner />
        <Sobre />
        <Escolaridade />
        <Projetos />
        <Contato />
        <Footer />
        <ScrollUp pageYOffset={100}/>

    </div>
  );
}

export default Home;
