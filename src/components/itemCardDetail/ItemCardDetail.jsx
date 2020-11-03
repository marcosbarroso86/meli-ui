import React from 'react'

export const ItemCardDetail = () => {
    return (        
        <div className="card mt-5">
            <div className="row">
                <div className="col-md-7">
                    <img  style={ {width: 680} } src="https://medias.musimundo.com/medias/sys_master/images/images/he2/h4f/10186366910494/00289082-138967-138967-01-138967-01.jpg" 
                    className="card-img" alt=""/>
                </div>
                <div className="col-md-5">
                    <div className="card-body">
                        <h5 className="card-title">  superhero  </h5>
                        <h2 className="card-text"> $24980 </h2>
                        <button className="btn btn-primary btn-block">comprar</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card-footer bg-transparent">
                    <p className="card-text">
                        <small> first_appearance  </small>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
