import React from 'react'
import { useForm } from '../../hooks/useForm'
import { ItemAdd } from '../itemAdd/ItemAdd';

export const NavBar = ({ history }) => {
  
    console.log(history)

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
                   < ItemAdd />
                </div>
             </nav>
        </div>
    )
}
