import React from 'react'
import { useForm } from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';

export const ItemAdd = ( props ) => {

    const [ formValues , handleInputChange ] =  useForm({
        searchText : ''
    });

    const history = useHistory();
    const { searchText } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push( `/items?search=${ searchText }`)
    }

    return (
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
                    type="submit"><img src="./public/assets/ic_Search.png" />
                </button>
            </div>
        </div>
    </form>  
    )
}
