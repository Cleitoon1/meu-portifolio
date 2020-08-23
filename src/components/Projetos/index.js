import React from 'react';
import Projeto from './Projeto';

function Projetos() {
    return (
        <div className="projetos album py-5 bg-light " id="projetos">
            <div className="container">
                <h2 className="text-center jumbotron-heading titulosVerdes">Projetos</h2>
                <div className="row">
                    <Projeto
                        imgAlt="Thumbnail [100%x225]" imgSrc="/images/project1.jpg"
                        categoria="Projeto Web"
                        urlProjeto="https://github.com/Cleitoon1/"
                        urlCodigo="https://github.com/Cleitoon1/"
                    >
                        <div>
                            <p className="card-text">
                                Esse é um projeto que eu desenvolvi usando as tecnologias A, B, C e D.
                            </p>
                            <ul>
                                <li>C#</li>
                                <li>Javascript</li>
                                <li>Python</li>
                            </ul>
                        </div>

                    </Projeto>
                    <Projeto
                        imgAlt="Thumbnail [100%x225]" imgSrc="/images/project1.jpg"
                        categoria="Projeto Mobile"
                        urlLeitura="https://github.com/Cleitoon1/"
                    >
                        <div>
                            <p className="card-text">
                                Esse é um projeto que eu desenvolvi usando as tecnologias A, B, C e D.
                                </p>
                            <ul>
                                <li>C#</li>
                                <li>Javascript</li>
                                <li>C#</li>
                                <li>Python</li>
                                <li>Javascript</li>
                                <li>Python</li>
                            </ul>
                        </div>
                    </Projeto>
                </div>
            </div>
        </div>
    )
}

export default Projetos;