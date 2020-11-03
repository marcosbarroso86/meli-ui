import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useForm } from '../../hooks/useForm'

export const NavBar = ({ history }) => {


    const [ formValues , handleInputChange , reset  ] =  useForm({
        searchText : ''
    });

    const { searchText } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push( `/items?search=${ searchText }`)
    }

    return (
        <div>
            <nav 
                className="d-flex justify-content-center navbar navbar-expand-lg" 
                style={ {backgroundColor : '#fff159'} } >

                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img 
                            style={ {width : 100} } 
                            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.10.4/mercadolibre/logo__large_plus.png" width="30" height="30" alt="" loading="lazy" />
                    </a>
                    <form style={ { width: 1000} } onSubmit={ handleSubmit }  >
                        <div className="input-group">
                            <input 
                                className="form-control input-lg" 
                                type="text" 
                                placeholder="Buscar productos, marcas y más…"
                                aria-label="Search" 
                                name="searchText"
                                value={ searchText }
                                onChange={ handleInputChange }/>
                            <div className="input-group-append">
                                <button 
                                    className="btn" 
                                    type="submit">BUSCAR
                                </button>
                            </div>
                        </div>
                    </form>  
                </div>

             </nav>
        </div>
    )
}
