import React from 'react'
import { useSelector } from 'react-redux'
import './ItemCardDetail.css'

export const ItemCardDetail = () => {

    const item = useSelector(state => state.items.detail);

    const {
        title , price , condition , free_shipping, sold_quantity, description , pictures
    } = item 

    const handleParser = (condition) => {
        
    }
    
    return item ? (        
        <div className="card fade-in margin-bottom-50">
            <div className="row">
                <div className="col-md-8">
                    <img src={ pictures && pictures[0].url} className="img-detail" alt={ title }/>
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <small className="card-text font-size-14 padding-top-32"> 
                            { condition == 'new' ? 'nuevo' : 'usado'  } - { sold_quantity } vendidos 
                        </small>
                        <h5 className="card-title font-size-24 padding-bottom-35">  { title }  </h5>
                        <h2 className="card-title font-size-46 padding-bottom-35"> ${ price && new Intl.NumberFormat("de-DE").format(price)}</h2>
                        <button className="btn btn-buy btn-block">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-footer bg-transparent">
                    <h2 className="card-title font-size-28">Descripción del producto </h2>
                    <p className="card-text">
                        <p className="font-size-16"> { description } </p>
                    </p>
                    </div>
                </div>
            </div>
        </div>
     ) : null
}
