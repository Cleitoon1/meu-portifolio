import React from 'react';
import { H3, H4 } from './style.js';
import MailTo from '../MailTo/index.js';
function Contato() {
    return (
        <section id="contato" className=" contato corPrimaria">
            <div className="corPrimaria">
                <div className="container-fluid">
                    <H3 className="text-center titulosBrancos">Disponível para oportunidades</H3>
                    <H4 className="text-center">
                        <MailTo email="mailto:cleiton.alvesjc@gmail.com">cleiton.alvesjc@gmail.com</MailTo>
                    </H4>
                </div>
            </div>
        </section>
    )
}

export default Contato;