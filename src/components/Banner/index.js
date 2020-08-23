import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function Banner() {
    return (
        <div className="banner" id="banner">
            <section class="jumbotron text-center corPrimaria">
                <div class="container">
                    <img src="https://lh3.googleusercontent.com/0dZdu3mhvsx-UM0et0RNJ6yl4LO_JGoki9oU3kEmiaRkwcaK9bXZ8oDg4TosUMWWId-d=w250-h250-rwa"
                        className="foto-perfil" alt={"Cleiton Alves"} />
                    <h1 class="jumbotron-heading itemMenu">Cleiton Alves de Oliveira</h1>
                    <p class="lead itemMenu">Desenvolvedor de Software</p>
                    <p>
                        <a href="#contato" class="btn btn-dark my-2">Contato</a>
                    </p>
                    <Link  target="_blank" to={{ pathname: "https://github.com/Cleitoon1/" }}>
                        <FaGithub size={32} className="itemMenu" />
                    </Link>
                    <Link target="_blank"  to={{ pathname: "https://www.linkedin.com/in/cleiton-alves-933857a1/" }}>
                        <FaLinkedin size={32} className="itemMenu" />
                    </Link>
                    <br />
                    <br />
                </div>
            </section>
        </div>
    )
}

export default Banner;