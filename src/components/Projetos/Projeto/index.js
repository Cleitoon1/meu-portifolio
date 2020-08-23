import React from 'react';
import { Link } from 'react-router-dom';

function Projeto(props) {
    return (
        <div className="col-md-6">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top img-projeto"
                    alt={(props.imgAlt ?? `Projeto`)} src={props.imgSrc}
                />
                <div className="card-body">
                    {
                        props.children
                    }
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {
                                props.urlProjeto && <Link target="_blank" to={props.urlProjeto} type="button" className="btn btn-sm btn-outline-primary">Ver Projeto</Link>
                            }
                            {
                                props.urlLeitura && <Link target="_blank" to={props.urlLeitura} type="button" className="btn btn-sm btn-outline-info">Ler</Link>
                            }
                            {
                                props.urlCodigo && <Link target="_blank" to={props.urlCodigo} type="button" className="btn btn-sm btn-outline-success">Ver Código</Link>
                            }
                        </div>
                        {
                            props.categoria &&
                            <small className="text-muted">{props.categoria}</small>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projeto;