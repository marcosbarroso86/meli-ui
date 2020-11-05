import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom';

export const ItemCard = ({ id ,  title , price , pictures , free_shipping}) => {

    return (
        <Link to={ `/items/${ id }` } className="fade-in text-link">
             <div className="card">
                <div className="row">
                    <div className="col-md-2">
                        <img src={ pictures[0].url } alt={ title }  className="img-list"/>
                    </div>
                    <div className="col-md-10">
                        <div className="d-flex">
                            <h4 className="card-title"> $ { new Intl.NumberFormat("de-DE").format(price)}
                                {
                                    free_shipping && <img className="img_shipping" src="./public/assets/ic_shipping.png" /> 
                                }
                            </h4>
                        </div>
                        <div className="col-md-8 padding-0">
                            <p className="card-text">{ title }</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
