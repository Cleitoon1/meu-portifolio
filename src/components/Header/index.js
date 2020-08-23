import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.css';

function Header() {
    return (
        <header>
            <div className="Menu">
                <navbar className="navbar navbar-expand-md navbar-light navbar-cor">
                    <Link className="navbar-brand itemMenu" to="#">Cleiton Alves</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHome"
                        aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarHome">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        <ul className="navbar-nav">
                            <li><Link className="nav-link itemMenu" smooth to="#home">Home</Link></li>
                            <li><Link className="nav-link itemMenu" smooth to="#sobre">Sobre</Link></li>
                            <li><Link className="nav-link itemMenu" smooth to="#escolaridade">Formação</Link></li>
                            <li><Link className="nav-link itemMenu" smooth to="#projetos">Projetos</Link></li>
                            <li><Link className="nav-link itemMenu" smooth to="#contato">Contato</Link></li>
                        </ul>
                    </div>
                </navbar>
            </div>
        </header>
    )
}

export default Header;